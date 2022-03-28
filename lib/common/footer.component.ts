
import { html, CSSResult, TemplateResult, css } from 'lit-element';
import { RxLitElement } from 'rx-lit';

export class FooterComponent extends RxLitElement {

  render(): TemplateResult {
      return html`
      <footer>
        <a href="https://www.facebook.com/KLJHakendover"><img src="images/Facebooklogo.png" alt="Facebook"></a>
        <a href="https://twitter.com/KLJHakendover"><img src="images/Twitterlogo.png" alt="Twitter"></a>
      </footer>`;
  }

  static get styles(): CSSResult[] {

    return [
      css`
      
      footer {
        width: 100%;
        text-align: right;
        position: fixed;
        bottom: 0;
      }
    
      footer img {
        width: 4%;
        min-width: 17px;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
      }
    
      footer a {
        padding-top: 10px;
      }`
    ];

  }

}