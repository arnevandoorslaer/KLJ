import { EventObject } from 'xstate';
export declare enum AppEvents {
    NAVIGATE = "navigate"
}
export declare class NavigateEvent implements EventObject {
    page: string;
    type: AppEvents.NAVIGATE;
    constructor(page: string);
}
export declare type AppEvent = NavigateEvent | ErrorEvent;
