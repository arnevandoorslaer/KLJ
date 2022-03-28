import { StateSchema } from 'xstate';
import { AppContext } from './app.context';

export enum AppRootStates {
  AUTHENTICATE = '[AppState: Authenticate]',
  FEATURE = '[AppState: Features]',
}

export enum AppFeatureStates {
  HOME = '[AppFeatureState: Home]',
  CALENDAR = '[AppFeatureState: Calendar]',
  CONTACT = '[AppFeatureState: Contact]',
  INFO = '[AppFeatureState: Info]',
}

export interface AppState {
  value: Partial<{ [AppRootStates.FEATURE]: any; [AppRootStates.AUTHENTICATE]: any }>;
  context: AppContext;
}

export interface AppStateSchema extends StateSchema<AppContext> {
  states: {
    [AppRootStates.FEATURE]: {
      states: {
        [key in AppFeatureStates]?: StateSchema<AppContext>;
      };
    };
  };
}
