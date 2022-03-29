import { createRoute, NavigatedEvent, Route, routerEventsConfig, routerStateConfig } from './common/router';
import { MachineConfig, send } from 'xstate';
import { AppContext } from './app.context';
import { AppEvent, AppEvents, NavigateEvent } from './app.events';
import { AppFeatureStates, AppRootStates, AppStateSchema } from './app.states';


export const routes: Route[] = [
  createRoute('/contact', [ `#${AppFeatureStates.CONTACT}` ] ),
  createRoute('/calendar', [ `#${AppFeatureStates.CALENDAR}` ]),
  createRoute('/info', [ `#${AppFeatureStates.INFO}` ]),
  createRoute('.*', [ `#${AppFeatureStates.HOME}` ]),
];

export const appMachine: MachineConfig<AppContext, AppStateSchema, AppEvent> = {

  type: 'parallel',
  on: {
    ...(routerEventsConfig as any)(),
  },
  states: {
    ... (routerStateConfig as any)(routes),
    [AppRootStates.FEATURE]: {
      initial: AppFeatureStates.HOME,
      on: {
        [AppEvents.NAVIGATE]: [
          {
            cond: (ctx, e: NavigateEvent) => e.page === 'CONTACT',
            target: `#${AppFeatureStates.CONTACT}`,
          },
          {
            cond: (ctx, e: NavigateEvent) => e.page === 'CALENDAR',
            target: `#${AppFeatureStates.CALENDAR}`,
          },
          {
            cond: (ctx, e: NavigateEvent) => e.page === 'INFO',
            target: `#${AppFeatureStates.INFO}`,
          },
          {
            cond: (ctx, e: NavigateEvent) => e.page === 'HOME',
            target: `#${AppFeatureStates.HOME}`,
          },

        ],
      },
      states: {
        [AppFeatureStates.HOME]: {
          id: AppFeatureStates.HOME,
          entry: [
            send(() => new NavigatedEvent(`/home`, `KLJ Hakendover - Home`)),
          ],
        },
        [AppFeatureStates.CALENDAR]: {
          id: AppFeatureStates.CALENDAR,
          entry: [
            send(() => new NavigatedEvent(`/calendar`, `KLJ Hakendover - Calendar`)),
          ],
        },
        [AppFeatureStates.CONTACT]: {
          id: AppFeatureStates.CONTACT,
          entry: [
            send(() => new NavigatedEvent(`/contact`,`KLJ Hakendover - Contact`)),
          ],
        },
        [AppFeatureStates.INFO]: {
          id: AppFeatureStates.INFO,
          entry: [
            send(() => new NavigatedEvent(`/info`, `KLJ Hakendover - Info`)),
          ],
        },

      },
    },
  },

};
