import { assign, send } from 'xstate';
/**
 * Checks the window.location.pathname against a given path
 * Path should be a full match
 *
 * @param match The path of the route to match
 * @returns true when path matches, otherwise false
 */
export const matchPath = (match) => {
    const regex = new RegExp(`^${match.replace(/{{[^/]+}}/ig, '(.+)')}$`, 'i');
    const matches = window.location.pathname.match(regex);
    return !!matches && matches.length > 0;
};
/**
 * For a given route, returns the URL variables as a Map
 *
 * @param route The route for which to retrieve variables
 */
export const urlVariables = (route) => {
    const searchParams = new URL(window.location.href).searchParams;
    const hash = new URL(window.location.href).hash;
    const regex = new RegExp(`^${route.path.replace(/{{[^/]+}}/ig, '(.+?)')}$`, 'i');
    const parts = route.path.split('/')
        .filter((part) => part.startsWith('{{') && part.endsWith('}}'));
    const pathParams = new Map();
    if (parts.length > 0) {
        const matches = (window.location.pathname.match(regex) || []).splice(1);
        const variableNames = parts.map((part) => part.substring(2, part.length - 2));
        variableNames.forEach((variable, i) => {
            pathParams.set(variable, matches[i]);
        });
    }
    return {
        searchParams,
        pathParams,
        hash,
    };
};
/**
 * Returns the currently active route base on window.location.pathname
 *
 * @param routes A list of all routes
 * @returns The currently active route
 */
export const activeRoute = (routes) => {
    const route = routes.find((rte) => matchPath(rte.path));
    return Object.assign(Object.assign({}, route), urlVariables(route));
};
/**
 * Updates the document's title
 *
 * @param title The new page title
 */
export const updateTitle = (title) => {
    document.title = title;
};
/**
 * Updates the path in the URL bar
 *
 * @param path The new value for the path
 * @param title Optional, the new document title
 */
export const updateHistory = (path, title) => {
    // keep hash and query parameters
    const completePath = path + window.location.search + window.location.hash;
    if (path === window.location.pathname) {
        history.replaceState({}, title || '', completePath);
    }
    else {
        history.pushState({}, title || '', completePath);
    }
    if (title) {
        updateTitle(title);
    }
};
/**
 * Event references for the router, with readable log format.
 */
export var RouterEvents;
(function (RouterEvents) {
    RouterEvents["NAVIGATE"] = "[RouterEvent: Navigate]";
    RouterEvents["NAVIGATED"] = "[RouterEvent: Navigated]";
})(RouterEvents || (RouterEvents = {}));
/**
 * An event which is dispatched when routing should start
 */
export class NavigateEvent {
    constructor(path) {
        this.path = path;
        this.type = RouterEvents.NAVIGATE;
    }
}
/**
 * An event which is dispatched at the end of routing
 */
export class NavigatedEvent {
    constructor(path, title) {
        this.path = path;
        this.title = title;
        this.type = RouterEvents.NAVIGATED;
    }
}
/**
 * State references for the application's features, with readable log format.
 */
export var RouterStates;
(function (RouterStates) {
    RouterStates["IDLE"] = "[RouterStates: Idle]";
    RouterStates["NAVIGATING"] = "[RouterStates: Navigating]";
})(RouterStates || (RouterStates = {}));
/**
 * State key for the router
 */
export const ROUTER = '[AppState: Router]';
/**
 * StateNodeConfig for the router
 * Resolves URL path to a state
 */
export const routerStateConfig = (routes) => {
    var _a, _b, _c;
    return ({
        [ROUTER]: {
            initial: RouterStates.IDLE,
            states: {
                [RouterStates.IDLE]: {
                    id: RouterStates.IDLE,
                },
                [RouterStates.NAVIGATING]: {
                    id: RouterStates.NAVIGATING,
                    invoke: {
                        src: async () => Promise.resolve(),
                        onDone: {
                            target: [RouterStates.IDLE, ...((_b = (_a = activeRoute(routes)) === null || _a === void 0 ? void 0 : _a.targets) !== null && _b !== void 0 ? _b : [])],
                            actions: [
                                () => {
                                    const route = activeRoute(routes);
                                    if (route === null || route === void 0 ? void 0 : route.title) {
                                        updateTitle(route.title);
                                    }
                                },
                                send(new NavigatedEvent(window.location.pathname, (_c = activeRoute(routes)) === null || _c === void 0 ? void 0 : _c.title)),
                            ],
                        },
                    },
                },
            },
        },
    });
};
export const routerEventsConfig = () => ({
    [RouterEvents.NAVIGATE]: {
        target: [`#${RouterStates.NAVIGATING}`],
        actions: [assign({ path: (c, event) => event.path || window.location.pathname })],
    },
    [RouterEvents.NAVIGATED]: {
        actions: [(c, event) => updateHistory(event.path, event.title)],
    },
});
export const createRoute = (path, targets, title) => ({ path, targets, title });
//# sourceMappingURL=router.js.map