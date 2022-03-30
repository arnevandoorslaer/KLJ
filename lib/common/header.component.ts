
import { html, css, CSSResult, TemplateResult } from 'lit-element';
import { RxLitElement } from 'rx-lit';



export class HeaderComponent extends RxLitElement {

  render(): TemplateResult {
      return html`
      <header>
        <div>
          <img class="banner" src="images/Banner.jpg">
          <div>KLJ Hakendover</div>
        </div>
        <nav>
          <ul>
            <li @click="${() => this.onButtonClick('home')}">Home</li>
            /
            <li @click="${() => this.onButtonClick('contact')}">Contact</li>
            /
            <li @click="${() => this.onButtonClick('calendar')}"> Kalender</li>
            /
            <li @click="${() => this.onButtonClick('info')}">Info</li>
          </ul>
        </nav>
      </header>
  `;
  }


  onButtonClick = (page: string): void => {
    this.dispatchEvent(new CustomEvent('navigate', {detail: page}));
  };


  static get styles(): CSSResult[] {

    return [
      css`

        
      header div {
        position: relative;
        text-align: center;
        color: white;
      }

      header div div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 3rem;
        font-weight: bold;
      }

      header div img {
        width: 100%;
        height: 12rem;
        object-fit: cover;
      }
      
      .logo {
        font-size: 25px;
        size: 25px;
        width: 100px;
        font-weight: bold;
      }

      li {
        color: black;
        text-decoration: none;
        text-transform: uppercase;
      }
      
      li:hover {
        color: #e32c2a;
        cursor: pointer;
      }

      ul {
        display: flex;
        list-style: none;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0;
        padding: 1rem 0;
      }
      
      nav {
        background: #e2e2e2;
        height: 50px
      }
      `
    ];

  }

}