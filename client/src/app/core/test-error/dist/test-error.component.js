"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestErrorComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var TestErrorComponent = /** @class */ (function () {
    function TestErrorComponent(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    TestErrorComponent.prototype.ngOnInit = function () { };
    TestErrorComponent.prototype.get404Error = function () {
        this.http.get(this.baseUrl + 'products/42').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorComponent.prototype.get500Error = function () {
        this.http.get(this.baseUrl + 'buggy/servererror').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorComponent.prototype.get400Error = function () {
        this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    TestErrorComponent.prototype.get400ValidationError = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'products/fortytwo').subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
            _this.validationErrors = error.errors;
        });
    };
    TestErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-test-error',
            templateUrl: './test-error.component.html',
            styleUrls: ['./test-error.component.scss']
        })
    ], TestErrorComponent);
    return TestErrorComponent;
}());
exports.TestErrorComponent = TestErrorComponent;
