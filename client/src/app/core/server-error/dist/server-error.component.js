"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServerErrorComponent = void 0;
var core_1 = require("@angular/core");
var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent(router) {
        this.router = router;
        var navigation = this.router.getCurrentNavigation();
        this.error = navigation && navigation.extras && navigation.extras.state &&
            navigation.extras.state.error;
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-server-error',
            templateUrl: './server-error.component.html',
            styleUrls: ['./server-error.component.scss']
        })
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());
exports.ServerErrorComponent = ServerErrorComponent;
