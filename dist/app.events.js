export var AppEvents;
(function (AppEvents) {
    AppEvents["NAVIGATE"] = "navigate";
})(AppEvents || (AppEvents = {}));
export class NavigateEvent {
    constructor(page) {
        this.page = page;
        this.type = AppEvents.NAVIGATE;
    }
}
//# sourceMappingURL=app.events.js.map