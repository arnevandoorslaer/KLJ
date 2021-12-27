import { html, css, CSSResult, TemplateResult, internalProperty, property, unsafeCSS } from 'lit-element';
import { RxLitElement } from 'rx-lit';
import { createMachine, EventObject, interpret, State } from 'xstate';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export class InfoComponent extends RxLitElement {

  render(): TemplateResult {
      return html`<main class="main_column">
      <article>
          <h2>Inschrijven</h2>
          <p>De kinderen kunnen zich inschrijven via <a href="inschrijfForm.html">het formulier</a>.</p>
          <p>De betaling dient om praktische redenen bij de leiding te gebeuren.</p>
          <p> Gelieve je tot de leiding te wenden op de startdag of op de eerstvolgende activiteit om het
              inschrijvingsgeld te betalen.</p>
          <p>Pas vanaf de betaling in orde is, zullen de kinderen ook verzekerd zijn tijdens de activiteiten.</p>
          <p>Elke activiteit zorgen wij voor een drankje en een koekje, daarom vragen we ook om elk week €1 mee te
              brengen.</p>
      </article>
      <article>
          <h2>Hoe kan je ons bereiken?</h2>
          <p>Eerst en vooral kan je ons steeds via GSM of email bereiken. Deze gegevens kan men vinden op de pagina <a
                  href="contact.html">contact</a>.</p>
          <p>Verder nodigen we je graag uit om op Facebook onze pagina leuk te vinden: “KLJ Hakendover”. Hier vind je alle
              informatie over <a href="kalender.html">activiteiten</a>, foto’s, leuke weetjes, ... terug. Op die manier
              hopen we een betere communicatie naar de ouders toe te garanderen.</p>
          <p>Dus mama’s en papa’s, wie nog geen Facebook heeft, wij raden ten zeerste aan een account aan te maken. Op die
              manier kan je ook de hopen foto’s van je zoon/dochter bekijken die wij tijdens het kamp en sommige
              activiteiten maken!</p>
      </article>
      <article>
          <h2>Het uniform</h2>
          <p>Het rode sjaaltje is al ettelijke jaren het grote uitstalbord van KLJ. Vanaf dit werkjaar wordt het uniform
              uitgebreid met shorts voor de jongens en rokjes voor de meisjes.</p>
          <p>Het KLJ-sjaaltje is verplicht te dragen vanaf 6 jaar. Je kan dit bij de leiding aankopen. De shorts en rokjes
              zijn verplicht vanaf 9 jaar, deze kan je via de leiding bestellen en worden betaald bij ontvangst.</p>
          <p>Vrijblijvend kan je ook een gepersonaliseerd T-shirt met het logo van KLJ Hakendover op bestellen bij de
              leiding. Ook deze worden betaald bij ontvangst.</p>
      </article>
      <article>
          <h2>De prijzen</h2>
          <ul>
              <li>Sjaaltje: €5</li>
              <li>Rok (kindermaat): €26</li>
              <li>(volwassen): €29</li>
              <li>Short (kindermaat): €32</li>
              <li>(volwassen): €35</li>
              <li>T-shirt: €12,50</li>
          </ul>
      </article>
  </main>`;
  }

  static get styles(): CSSResult[] {

    return [
    ];

  }

}