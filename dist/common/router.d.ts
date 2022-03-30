import { EventObject } from 'xstate';
/**
 * Route definition for use in the router
 */
export interface Route {
    /**
     * The path matcher e.g. '/object/{{objectId}}/edit'
     */
    path: string;
    /**
     * The target state(s) of this route (likely some feature state)
     */
    targets: string[];
    /**
     * The document.title of this route
     * When set, router will update document.title to this value
     */
    title?: string;
}
export interface UrlVariables {
    /**
     * The query parameters of a URL
     */
    searchParams: URLSearchParams;
    /**
     * The path parameters of a URL
     */
    pathParams: Map<string, string>;
    /**
     * The hash of a URL
     */
    hash: string;
}
/**
 * Checks the window.location.pathname against a given path
 * Path should be a full match
 *
 * @param match The path of the route to match
 * @returns true when path matches, otherwise false
 */
export declare const matchPath: (match: string) => boolean;
/**
 * For a given route, returns the URL variables as a Map
 *
 * @param route The route for which to retrieve variables
 */
export declare const urlVariables: (route: Route) => UrlVariables;
/**
 * Returns the currently active route base on window.location.pathname
 *
 * @param routes A list of all routes
 * @returns The currently active route
 */
export declare const activeRoute: (routes: Route[]) => Route & UrlVariables;
/**
 * Updates the document's title
 *
 * @param title The new page title
 */
export declare const updateTitle: (title: string) => void;
/**
 * Updates the path in the URL bar
 *
 * @param path The new value for the path
 * @param title Optional, the new document title
 */
export declare const updateHistory: (path: string, title?: string | undefined) => void;
/**
 * Event references for the router, with readable log format.
 */
export declare enum RouterEvents {
    NAVIGATE = "[RouterEvent: Navigate]",
    NAVIGATED = "[RouterEvent: Navigated]"
}
/**
 * An event which is dispatched when routing should start
 */
export declare class NavigateEvent implements EventObject {
    path?: string | undefined;
    type: RouterEvents.NAVIGATE;
    constructor(path?: string | undefined);
}
/**
 * An event which is dispatched at the end of routing
 */
export declare class NavigatedEvent implements EventObject {
    path: string;
    title?: string | undefined;
    type: RouterEvents.NAVIGATED;
    constructor(path: string, title?: string | undefined);
}
/**
 * Union type of router events.
 */
export declare type RouterEvent = NavigateEvent | NavigatedEvent;
/**
 * State references for the application's features, with readable log format.
 */
export declare enum RouterStates {
    IDLE = "[RouterStates: Idle]",
    NAVIGATING = "[RouterStates: Navigating]"
}
/**
 * State key for the router
 */
export declare const ROUTER = "[AppState: Router]";
/**
 * StateNodeConfig for the router
 * Resolves URL path to a state
 */
export declare const routerStateConfig: (routes: Route[]) => {
    "[AppState: Router]": {
        initial: RouterStates;
        states: {
            "[RouterStates: Idle]": {
                id: RouterStates;
            };
            "[RouterStates: Navigating]": {
                id: RouterStates;
                invoke: {
                    src: () => Promise<void>;
                    onDone: {
                        target: string[];
                        actions: ((() => void) | import("xstate").SendAction<unknown, EventObject, NavigatedEvent>)[];
                    };
                };
            };
        };
    };
};
export declare const routerEventsConfig: () => {
    "[RouterEvent: Navigate]": {
        target: string[];
        actions: import("xstate").AssignAction<unknown, NavigateEvent>[];
    };
    "[RouterEvent: Navigated]": {
        actions: ((c: unknown, event: NavigatedEvent) => void)[];
    };
};
export declare const createRoute: (path: string, targets: string[], title?: string | undefined) => Route;
