
import { html, css, CSSResult, TemplateResult } from 'lit-element';
import { RxLitElement } from 'rx-lit';



export class HeaderComponent extends RxLitElement {

  render(): TemplateResult {
      return html`
      <header>
        <a class="logo"><img src="images/KLJlogo.png" alt="KLJ"></a>
        <nav class="header-right">
          <ul>
            <li><a @click="${() => this.onButtonClick('home')}">Home</a></li>
            <li><a @click="${() => this.onButtonClick('contact')}">Contact</a></li>
            <li><a @click="${() => this.onButtonClick('kalender')}">Kalender</a></li>
            <li><a @click="${() => this.onButtonClick('info')}">Info</a></li>
          </ul>
        </nav>
      </header>
  `;
  }


  onButtonClick = (page: string): void => {
    console.log('Navigating to', page);
    this.dispatchEvent(new CustomEvent(page));
  };


  static get styles(): CSSResult[] {

    return [
      css`
      header {
        overflow: hidden;
        background: lightgrey;
      }
      
      a {
        float: left;
        color: black;
        padding: 12px;
        text-decoration: none;
        font-size: 25px; 
        line-height: 25px;
      }
      
      img {
        font-size: 25px;
        size: 25px;
        width: 100px;
        font-weight: bold;
      }
      
      a:hover {
        color: #4CAF50;
      }

      ul {
        display: flex;
        padding: 0;
        list-style: none;
        flex-direction: row;
        float:right;
      }
      `
    ];

  }

}