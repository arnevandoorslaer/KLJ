import { html, CSSResult, TemplateResult, internalProperty, css } from 'lit-element';
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
import { AppEvent, NavigateEvent } from './app.events';
import { AppStateSchema, AppState, AppRootStates, AppFeatureStates } from './app.states';
import { appMachine } from './app.machine';

export class AppComponent extends RxLitElement {

  
  private machine: StateMachine<AppContext, AppStateSchema, AppEvent, AppState>;

  private actor: Interpreter<AppContext, AppStateSchema, AppEvent, AppState>;

  @internalProperty() state?: State<AppContext, AppEvent, AppStateSchema, AppState>;

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
      <header-component @navigate="${this.onNavigate}"></header-component>
      ${ 
          this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.HOME }) ? html`<home-page></home-page>` 
        : this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.CONTACT }) ? html`<contact-page></contact-page>`
        : this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.CALENDAR }) ? html`<calendar-page></calendar-page>` 
        : this.state?.matches({ [AppRootStates.FEATURE]: AppFeatureStates.INFO }) ? html`<info-page></info-page>` 
    : html``  }
      <footer-component></footer-component>
      `;
  }

  onNavigate = (event: CustomEvent): void => {
    this.actor.send(new NavigateEvent(event.detail.toUpperCase()));
  };

  static get styles(): CSSResult[] {

    return [
              css`
        
              `

    ];

  }

}