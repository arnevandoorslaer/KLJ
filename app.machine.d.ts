import { Route } from './common/router';
import { MachineConfig } from 'xstate';
import { AppContext } from './app.context';
import { AppEvent } from './app.events';
import { AppStateSchema } from './app.states';
export declare const routes: Route[];
export declare const appMachine: MachineConfig<AppContext, AppStateSchema, AppEvent>;
