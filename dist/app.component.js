import { __decorate } from "tslib";
import { html, internalProperty, css } from 'lit-element';
import { RxLitElement } from 'rx-lit';
import { createMachine, interpret } from 'xstate';
import { from } from 'rxjs';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { InfoComponent } from './features/info/info.component';
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { NavigateEvent } from './app.events';
import { AppRootStates, AppFeatureStates } from './app.states';
import { appMachine } from './app.machine';
export class AppComponent extends RxLitElement {
    constructor() {
        super();
        this.onNavigate = (event) => {
            console.log('Navigating to', event.detail);
            this.actor.send(new NavigateEvent(event.detail.toUpperCase()));
        };
        this.machine = createMachine(appMachine);
        this.actor = interpret(this.machine, { devTools: true }).onTransition((s) => console.log(s.value));
        customElements.define('home-page', HomeComponent);
        customElements.define('contact-page', ContactComponent);
        customElements.define('calendar-page', CalendarComponent);
        customElements.define('info-page', InfoComponent);
        customElements.define('footer-component', FooterComponent);
        customElements.define('header-component', HeaderComponent);
        this.subscribe('state', from(this.actor));
        this.actor.start();
    }
    render() {
        var _a, _b, _c, _d;
        return html `
      <header-component @navigate="${this.onNavigate}"></header-component>
      <main>
      ${((_a = this.state) === null || _a === void 0 ? void 0 : _a.matches({ [AppRootStates.FEATURE]: AppFeatureStates.HOME })) ? html `<home-page></home-page>`
            : ((_b = this.state) === null || _b === void 0 ? void 0 : _b.matches({ [AppRootStates.FEATURE]: AppFeatureStates.CONTACT })) ? html `<contact-page></contact-page>`
                : ((_c = this.state) === null || _c === void 0 ? void 0 : _c.matches({ [AppRootStates.FEATURE]: AppFeatureStates.CALENDAR })) ? html `<calendar-page></calendar-page>`
                    : ((_d = this.state) === null || _d === void 0 ? void 0 : _d.matches({ [AppRootStates.FEATURE]: AppFeatureStates.INFO })) ? html `<info-page></info-page>`
                        : html ``}


      </main>
      <footer-component></footer-component>
      `;
    }
    static get styles() {
        return [
            css `
             
             
              `
        ];
    }
}
__decorate([
    internalProperty()
], AppComponent.prototype, "state", void 0);
//# sourceMappingURL=app.component.js.map