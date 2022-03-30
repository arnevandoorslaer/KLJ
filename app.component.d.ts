import { CSSResult, TemplateResult } from 'lit-element';
import { RxLitElement } from 'rx-lit';
import { State } from 'xstate';
import { AppContext } from './app.context';
import { AppEvent } from './app.events';
import { AppStateSchema, AppState } from './app.states';
export declare class AppComponent extends RxLitElement {
    private machine;
    private actor;
    state?: State<AppContext, AppEvent, AppStateSchema, AppState>;
    constructor();
    render(): TemplateResult;
    onNavigate: (event: CustomEvent) => void;
    static get styles(): CSSResult[];
}
