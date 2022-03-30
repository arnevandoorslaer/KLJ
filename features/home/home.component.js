import { html } from 'lit-element';
import { RxLitElement } from 'rx-lit';
export class HomeComponent extends RxLitElement {
    render() {
        return html `<div class="main_column">
      <article>
          <h2>KLJ Hakendover</h2>
          <p>Elke zaterdagnamiddag komen de leiding en de leden samen in het Schoolpad te Hakendover</p>
          <p>De leiding staat dan klaar om er weer een onvergetelijke namiddag van te maken!</p>
          <p>Op onze site zul je kunnen zien wie die <a href="contact.html">gemotiveerde leiding</a> is, wanneer de <a
                  href="kalender.html">activiteiten</a> zijn maar ook <a href="informatie.html">nuttige info</a> voor
              de ouders en leden.</p>
      </article>
  
      <article>
          <h2>Sfeerbeelden</h2>
  
          <div class="slider">
              <!-- <figure>
                  <img src="images/slider/foto1.jpg" alt="slideshow">
                  <img src="images/slider/foto2.jpg" alt="slideshow">
                  <img src="images/slider/foto3.jpg" alt="slideshow">
                  <img src="images/slider/foto4.jpg" alt="slideshow">
                  <img src="images/slider/foto5.jpg" alt="slideshow">
              </figure> -->
          </div>
          <p>Als je een vraag hebt kan je ook zeker <a href="mailto:hoofdleiding@kljhakendover.be">een mailtje</a>
              sturen naar ons. Of een berichtje sturen via facebook.</p>
          <p>De KLJ-leiding</p>
      </article>
  </div>`;
    }
    static get styles() {
        return [];
    }
}
//# sourceMappingURL=home.component.js.map