var L=Object.defineProperty,b=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var w=(e,a,t)=>a in e?L(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))N.call(a,t)&&w(e,t,a[t]);if(E)for(var t of E(a))Z.call(a,t)&&w(e,t,a[t]);return e},I=(e,a)=>b(e,C(a));var T=(e,a,t)=>new Promise((n,p)=>{var i=r=>{try{m(t.next(r))}catch(v){p(v)}},d=r=>{try{m(t.throw(r))}catch(v){p(v)}},m=r=>r.done?n(r.value):Promise.resolve(r.value).then(i,d);m((t=t.apply(e,a)).next())});import{R as c,h as s,c as u,s as y,i as O,a as z,b as D,f as R}from"./vendor.6da15447.js";const x=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))n(p);new MutationObserver(p=>{for(const i of p)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(p){const i={};return p.integrity&&(i.integrity=p.integrity),p.referrerpolicy&&(i.referrerPolicy=p.referrerpolicy),p.crossorigin==="use-credentials"?i.credentials="include":p.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(p){if(p.ep)return;p.ep=!0;const i=t(p);fetch(p.href,i)}};x();class G extends c{render(){return s`<div class="main_column">
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
  </div>`}static get styles(){return[]}}class S extends c{render(){return s`    <div class="contactgrid">
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


  </div>`}static get styles(){return[]}}class V extends c{render(){return s`    <div class="maand">
      <h2>September</h2>

      <div>
          <p>Zaterdag 16
          </p>
          <p>Startdag
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>Iedereen is welkom
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 23
          </p>
          <p>Kennismaking
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 30
          </p>
          <p>GEEN ACTIVITEIT wegens schoolfeest Stap Voor Stap
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Oktober</h2>

      <div>
          <p>Zaterdag 7
          </p>
          <p>Doop
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>Kleren die (heel) vuil mogen worden
          </p>
      </div>

      <div>
          <p>Zondag 8
          </p>
          <p>Misviering
          </p>
          <p>Kerk: 9u
          </p>
          <p>Iedereen is welkom
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 14
          </p>
          <p>Vriendjesdag
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>Een van je vriendjes
          </p>
      </div>

      <div>
          <p>Zaterdag 21
          </p>
          <p>Fietstocht
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>Helm en fluohesje
          </p>
      </div>

      <div>
          <p>Zaterdag 28
          </p>
          <p>Bietentocht
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>Iedereen is welkom
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>November</h2>

      <div>
          <p>Zaterdag 4
          </p>
          <p>Fotozoektocht
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Vrijdag 10
          </p>
          <p>Filmavond
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>+12
          </p>
          <p>Wordt later meegedeeld
          </p>
      </div>

      <div>
          <p>Zaterdag 11
          </p>
          <p>Filmnamiddag
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 18
          </p>
          <p>Gezelschapsspelletjes
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 25
          </p>
          <p>Pleinspelen
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>December</h2>

      <div>
          <p>Zaterdag 2
          </p>
          <p>Bezoek aan het huis van Sinterklaas
          </p>
          <p>Lokaal: 13u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>Ouders die willen rijden
          </p>
      </div>

      <div>
          <p>Zaterdag 9
          </p>
          <p>Stadsspel
          </p>
          <p>Grote Markt Tienen: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 16
          </p>
          <p>Knutselen
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 23
          </p>
          <p>GEEN ACTIVITEIT
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 30
          </p>
          <p>GEEN ACTIVITEIT
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Januari</h2>

      <div>
          <p>Zaterdag 6
          </p>
          <p>Nieuwjaarsdrink
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>Iedereen is welkom
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 13
          </p>
          <p>Ruiltocht
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 20
          </p>
          <p>Casino
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 27
          </p>
          <p>Mini-quiz
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Februari</h2>

      <div>
          <p>Zaterdag 3
          </p>
          <p>Schaatsen
          </p>
          <p>Lokaal: 13u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>Ouders die willen rijden + €6
          </p>
      </div>

      <div>
          <p>Zaterdag 10
          </p>
          <p>Carnaval
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 17
          </p>
          <p>Olymische Spelen
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 24
          </p>
          <p>Quiz
          </p>
          <p>OC Hakendover 20u
          </p>
          <p>Iedereen is welkom
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Maart</h2>

      <div>
          <p>Zaterdag 3
          </p>
          <p>Weekend
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>-12
          </p>
          <p>Wordt later meegedeeld
          </p>
      </div>

      <div>
          <p>Zaterdag 10
          </p>
          <p>Dropping
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 17
          </p>
          <p>Zwemmen
          </p>
          <p>Lokaal: 13u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>Ouders die willen rijden + €5
          </p>
      </div>

      <div>
          <p>Zaterdag 24
          </p>
          <p>Ruwe pleinspelen
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 31
          </p>
          <p>GEEN ACTIVITEIT
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>April</h2>

      <div>
          <p>Zaterdag 7
          </p>
          <p>Paaseierenzoektocht
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Vrijdag 13
          </p>
          <p>Weekend
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>+12
          </p>
          <p>Wordt later meegedeeld
          </p>
      </div>

      <div>
          <p>Zaterdag 21
          </p>
          <p>Croque-avond
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>Iedereen is welkom
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 28
          </p>
          <p>Vettige spelen
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>Kleren die (heel) vuil mogen worden
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Mei</h2>

      <div>
          <p>Zaterdag 5
          </p>
          <p>Dorpsspel
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 12
          </p>
          <p>Waterspelletjes
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 19
          </p>
          <p>KLJ-klassiekers
          </p>
          <p>Lokaal: 14u – 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 26
          </p>
          <p>Kajakken
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>+12
          </p>
          <p>
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Juni</h2>

      <div>
          <p>Zaterdag 2
          </p>
          <p>GEEN ACTIVITEIT wegens examens leiding
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 9
          </p>
          <p>GEEN ACTIVITEIT wegens examens leiding
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 16
          </p>
          <p>GEEN ACTIVITEIT wegens examens leiding
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 23
          </p>
          <p>Walibi
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>-12/+12
          </p>
          <p>Wordt later meegedeeld
          </p>
      </div>

  </div>

  <div class="maand">
      <h2>Juli</h2>

      <div>
          <p>Zaterdag 30
          </p>
          <p>GEEN ACTIVITEIT wegens zomervakantie
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 9
          </p>
          <p>GEEN ACTIVITEIT wegens zomervakantie
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zaterdag 14
          </p>
          <p>Wafelbak
          </p>
          <p>Lokaal: 14u - 17u
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

      <div>
          <p>Zondag 22
          </p>
          <p>KAMP
          </p>
          <p>Wordt later meegedeeld
          </p>
          <p>-12/+12
          </p>
          <p>
          </p>
      </div>

  </div>`}static get styles(){return[]}}class F extends c{render(){return s`<main class="main_column">
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
  </main>`}static get styles(){return[]}}class H extends c{render(){return s`
      <footer>
        <a href="https://www.facebook.com/KLJHakendover"><img src="images/Facebooklogo.png" alt="Facebook"></a>
        <a href="https://twitter.com/KLJHakendover"><img src="images/Twitterlogo.png" alt="Twitter"></a>
      </footer>`}static get styles(){return[u`
      
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
      }`]}}class K extends c{constructor(){super(...arguments);this.onButtonClick=a=>{this.dispatchEvent(new CustomEvent("navigate",{detail:a}))}}render(){return s`
      <header>
        <a class="logo"><img src="images/KLJlogo.png" alt="KLJ"></a>
        <nav class="header-right">
          <ul>
            <li><a @click="${()=>this.onButtonClick("home")}">Home</a></li>
            <li><a @click="${()=>this.onButtonClick("contact")}">Contact</a></li>
            <li><a @click="${()=>this.onButtonClick("calendar")}">Kalender</a></li>
            <li><a @click="${()=>this.onButtonClick("info")}">Info</a></li>
          </ul>
        </nav>
      </header>
  `}static get styles(){return[u`
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
      `]}}var k;(function(e){e.NAVIGATE="navigate"})(k||(k={}));class W{constructor(a){this.page=a,this.type=k.NAVIGATE}}var g;(function(e){e.AUTHENTICATE="[AppState: Authenticate]",e.FEATURE="[AppState: Features]"})(g||(g={}));var o;(function(e){e.HOME="[AppFeatureState: Home]",e.CALENDAR="[AppFeatureState: Calendar]",e.CONTACT="[AppFeatureState: Contact]",e.INFO="[AppFeatureState: Info]"})(o||(o={}));const M=e=>{const a=new RegExp(`^${e.replace(/{{[^/]+}}/ig,"(.+)")}$`,"i"),t=window.location.pathname.match(a);return!!t&&t.length>0},P=e=>{const a=new URL(window.location.href).searchParams,t=new URL(window.location.href).hash,n=new RegExp(`^${e.path.replace(/{{[^/]+}}/ig,"(.+?)")}$`,"i"),p=e.path.split("/").filter(d=>d.startsWith("{{")&&d.endsWith("}}")),i=new Map;if(p.length>0){const d=(window.location.pathname.match(n)||[]).splice(1);p.map(r=>r.substring(2,r.length-2)).forEach((r,v)=>{i.set(r,d[v])})}return{searchParams:a,pathParams:i,hash:t}},f=e=>{const a=e.find(t=>M(t.path));return h(h({},a),P(a))},J=e=>{document.title=e};var j;(function(e){e.NAVIGATE="[RouterEvent: Navigate]",e.NAVIGATED="[RouterEvent: Navigated]"})(j||(j={}));class U{constructor(a,t){this.path=a,this.title=t,this.type=j.NAVIGATED}}var l;(function(e){e.IDLE="[RouterStates: Idle]",e.NAVIGATING="[RouterStates: Navigating]"})(l||(l={}));const B="[AppState: Router]",$=e=>{var a,t,n;return{[B]:{initial:l.IDLE,states:{[l.IDLE]:{id:l.IDLE},[l.NAVIGATING]:{id:l.NAVIGATING,invoke:{src:()=>T(void 0,null,function*(){return Promise.resolve()}),onDone:{target:[l.IDLE,...(t=(a=f(e))==null?void 0:a.targets)!=null?t:[]],actions:[()=>{const p=f(e);(p==null?void 0:p.title)&&J(p.title)},y(new U(window.location.pathname,(n=f(e))==null?void 0:n.title))]}}}}}}},_=(e,a,t)=>({path:e,targets:a,title:t}),q=[_(".*",[`#${o.HOME}`])],Q={type:"parallel",states:I(h({},$(q)),{[g.FEATURE]:{initial:o.HOME,states:{[o.HOME]:{id:o.HOME,meta:{path:["/","/home"]}},[o.CALENDAR]:{id:o.CALENDAR,meta:{path:"/calendar"}},[o.CONTACT]:{id:o.CONTACT,meta:{path:"/contact"}},[o.INFO]:{id:o.INFO,meta:{path:"/info"}}}}})};var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,ee=(e,a,t,n)=>{for(var p=n>1?void 0:n?Y(a,t):a,i=e.length-1,d;i>=0;i--)(d=e[i])&&(p=(n?d(a,t,p):d(p))||p);return n&&p&&X(a,t,p),p};class A extends c{constructor(){super();this.onNavigate=a=>{console.log("Navigating to",a.detail),this.actor.send(new W(a.detail.toUpperCase()))},this.machine=z(Q),this.actor=D(this.machine,{devTools:!0}).onTransition(a=>console.log(a.value)),customElements.define("home-page",G),customElements.define("contact-page",S),customElements.define("calendar-page",V),customElements.define("info-page",F),customElements.define("footer-component",H),customElements.define("header-component",K),this.subscribe("state",R(this.actor)),this.actor.start()}render(){var a,t,n,p;return s`
      <header-component @navigate="${this.onNavigate}"></header-component>
      <main>
      ${((a=this.state)==null?void 0:a.matches({[g.FEATURE]:o.HOME}))?s`<home-page></home-page>`:((t=this.state)==null?void 0:t.matches({[g.FEATURE]:o.CONTACT}))?s`<contact-page></contact-page>`:((n=this.state)==null?void 0:n.matches({[g.FEATURE]:o.CALENDAR}))?s`<calendar-page></calendar-page>`:((p=this.state)==null?void 0:p.matches({[g.FEATURE]:o.INFO}))?s`<info-page></info-page>`:s``}


      </main>
      <footer-component></footer-component>
      `}static get styles(){return[u`
             
             
              `]}}ee([O()],A.prototype,"state",2);customElements.define("app-root",A);
