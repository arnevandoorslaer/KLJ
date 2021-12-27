import { inspect } from '@xstate/inspect';
import { AppComponent } from './app.component';
import './index';

/**
 * Register the root component.
 */
customElements.define('app-root', AppComponent);