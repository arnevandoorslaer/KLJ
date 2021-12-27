import { html, css, CSSResult, TemplateResult, internalProperty, property, unsafeCSS } from 'lit-element';
import { RxLitElement } from 'rx-lit';
import { createMachine, EventObject, interpret, State } from 'xstate';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export class ContactComponent extends RxLitElement {

  render(): TemplateResult {
      return html`    <div class="contactgrid">
      <h2>VASTE LEIDING</h2>


      <div><p>Céline(hoofdleiding)
      </p><img src="images/contact/celine.jpg" alt="Céline(hoofdleiding)"></div>

      <div><p>Pheline(hoofdleiding)
      </p><img src="images/contact/pheline.jpg" alt="Pheline(hoofdleiding)"></div>

      <div><p>Gitte
      </p><img src="images/contact/gitte.jpg" alt="Gitte"></div>

      <div><p>Seppe
      </p><img src="images/contact/seppe.jpg" alt="Seppe"></div>

      <div><p>Arne
      </p><img src="images/contact/arne.jpg" alt="Arne"></div>

      <div><p>Jeroen
      </p><img src="images/contact/jeroen.jpg" alt="Jeroen"></div>

      <div><p>Boghe(Seppe)
      </p><img src="images/contact/boghe.jpg" alt="Boghe(Seppe)"></div>

      <div><p>Thomas
      </p><img src="images/contact/thomas.jpg" alt="Thomas"></div>

      <h2>HULPLEIDING</h2>


      <div><p>Lukas
      </p><img src="images/contact/lukas.jpg" alt="Lukas"></div>

      <div><p>Dries
      </p><img src="images/contact/dries.jpg" alt="Dries"></div>

      <div><p>Kelly
      </p><img src="images/contact/kelly.jpg" alt="Kelly"></div>

      <div><p>Benaets(Arno)
      </p><img src="images/contact/arno.jpg" alt="Benaets(Arno)"></div>

      <div><p>Rosalie
      </p><img src="images/contact/rosalie.jpg" alt="Rosalie"></div>

      <div><p>Macy
      </p><img src="images/contact/macy.jpg" alt="Macy"></div>


  </div>`;
  }

  static get styles(): CSSResult[] {

    return [
    ];

  }

}