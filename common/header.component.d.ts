import { CSSResult, TemplateResult } from 'lit-element';
import { RxLitElement } from 'rx-lit';
export declare class HeaderComponent extends RxLitElement {
    render(): TemplateResult;
    onButtonClick: (page: string) => void;
    static get styles(): CSSResult[];
}
