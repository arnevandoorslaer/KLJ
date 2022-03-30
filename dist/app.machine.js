import { createRoute, routerStateConfig } from './common/router';
import { AppFeatureStates, AppRootStates } from './app.states';
export const routes = [
    createRoute('.*', [`#${AppFeatureStates.HOME}`]),
];
export const appMachine = {
    type: 'parallel',
    states: Object.assign(Object.assign({}, routerStateConfig(routes)), { [AppRootStates.FEATURE]: {
            initial: AppFeatureStates.HOME,
            states: {
                [AppFeatureStates.HOME]: {
                    id: AppFeatureStates.HOME,
                    meta: { path: ['/', '/home'] },
                },
                [AppFeatureStates.CALENDAR]: {
                    id: AppFeatureStates.CALENDAR,
                    meta: { path: '/calendar' },
                },
                [AppFeatureStates.CONTACT]: {
                    id: AppFeatureStates.CONTACT,
                    meta: { path: '/contact' },
                },
                [AppFeatureStates.INFO]: {
                    id: AppFeatureStates.INFO,
                    meta: { path: '/info' },
                },
            },
        } }),
};
//# sourceMappingURL=app.machine.js.map