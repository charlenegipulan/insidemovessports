"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrorInterceptor = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(operators_1.catchError(function (error) {
            if (error) {
                if (error.status === 400) {
                    if (error.error.errors) {
                        throw error.error;
                    }
                    else {
                        _this.toastr.error(error.error.message, error.error.statusCode);
                    }
                }
                if (error.status === 401) {
                    _this.toastr.error(error.error.message, error.error.statusCode);
                }
                if (error.status === 404) {
                    _this.router.navigateByUrl('/not-found');
                }
                if (error.status === 500) {
                    var navigationExtras = { state: { error: error.error } };
                    _this.router.navigateByUrl('/server-error', navigationExtras);
                }
            }
            return rxjs_1.throwError(error);
        }));
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
