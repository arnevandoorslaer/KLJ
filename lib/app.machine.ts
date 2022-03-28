import { MachineConfig } from 'xstate';
import { AppContext } from './app.context';
import { AppEvent } from './app.events';
import { AppFeatureStates, AppRootStates, AppStateSchema } from './app.states';


export const appMachine: MachineConfig<AppContext, AppStateSchema, AppEvent> = {

  type: 'parallel',

  states: {
    [AppRootStates.FEATURE]: {
      initial: AppFeatureStates.HOME,
      states: {
        [AppFeatureStates.HOME]: {
          id: AppFeatureStates.HOME,
        },
        [AppFeatureStates.CALENDAR]: {
          id: AppFeatureStates.CALENDAR,
        },
        [AppFeatureStates.CONTACT]: {
          id: AppFeatureStates.CONTACT,
        },
        [AppFeatureStates.INFO]: {
          id: AppFeatureStates.INFO,
        },

      },
    },
  },

};
