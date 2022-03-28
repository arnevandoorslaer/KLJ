import { html, CSSResult, TemplateResult, state, css } from 'lit-element';
import { RxLitElement } from 'rx-lit';
import { createMachine, interpret, Interpreter, State, StateMachine } from 'xstate';
import { from } from 'rxjs';
import { HomeComponent } from './features/home/home.component'
import { ContactComponent } from './features/contact/contact.component'
import { CalendarComponent } from './features/calendar/calendar.component'
import { InfoComponent } from './features/info/info.component'
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { AppContext } from './app.context';
import { AppEvent } from './app.events';
import { AppStateSchema, AppState, AppRootStates, AppFeatureStates } from './app.states';
import { appMachine } from './app.machine';

export class AppComponent extends RxLitElement {

  private machine: StateMachine<AppContext, AppStateSchema, AppEvent, AppState>;
  private actor: Interpreter<AppContext, AppStateSchema, AppEvent, AppState>;

  @state() state?: State<AppContext, AppEvent, AppStateSchema, AppState>;

  constructor() {

    super();

    this.machine = createMachine<AppContext, AppEvent, AppState>(appMachine);

    this.actor = interpret(this.machine, { devTools: true }).onTransition((s) => console.log(s.value)) as any;

    customElements.define('home-page', HomeComponent);
    customElements.define('contact-page', ContactComponent);
    customElements.define('calendar-page', CalendarComponent);
    customElements.define('info-page', InfoComponent);
    customElements.define('footer-component', FooterComponent);
    customElements.define('header-component', HeaderComponent);

    this.subscribe('state', from(this.actor as any) as any);

    this.actor.start();
  }

  render(): TemplateResult {
      return html`
      <header-component></header-component>
      <main>
      ${ 
          this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.HOME }) ? html`<home-page></home-page>` 
        : this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.CONTACT }) ? html`<contact-page></contact-page>`
        : this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.CALENDAR }) ? html`<calendar-page></calendar-page>` 
        : this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.INFO }) ? html`<info-page></info-page>` 
    : html``  }


      </main>
      <footer-component></footer-component>
      `;
  }

  static get styles(): CSSResult[] {

    return [
              css`
             
             
              `

    ];

  }

}