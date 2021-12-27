import { html, css, CSSResult, TemplateResult, internalProperty, property, unsafeCSS } from 'lit-element';
import { RxLitElement } from 'rx-lit';
import { createMachine, EventObject, interpret, State } from 'xstate';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeComponent } from './features/home/home.component'
import { ContactComponent } from './features/contact/contact.component'
import { CalendarComponent } from './features/calendar/calendar.component'
import { InfoComponent } from './features/info/info.component'

export class AppComponent extends RxLitElement {

  constructor() {

    super();

    customElements.define('home-page', HomeComponent);
    customElements.define('contact-page', ContactComponent);
    customElements.define('calendar-page', CalendarComponent);
    customElements.define('info-page', InfoComponent);
  }

  render(): TemplateResult {
      return html`<home-page></home-page>`;
  }

  static get styles(): CSSResult[] {

    return [
    ];

  }

}