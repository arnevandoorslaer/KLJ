import { RouterEvent } from './common/router';
import { EventObject } from 'xstate';

export enum AppEvents {
  NAVIGATE = 'navigate',
}

export class NavigateEvent implements EventObject {

  public type: AppEvents.NAVIGATE = AppEvents.NAVIGATE;
  constructor(public page: string) {}
}

export type AppEvent = 
  | RouterEvent
  | NavigateEvent
  | ErrorEvent;
