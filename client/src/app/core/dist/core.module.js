"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var router_1 = require("@angular/router");
var test_error_component_1 = require("./test-error/test-error.component");
var not_found_component_1 = require("./not-found/not-found.component");
var server_error_component_1 = require("./server-error/server-error.component");
var ngx_toastr_1 = require("ngx-toastr");
var section_header_component_1 = require("./section-header/section-header.component");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [nav_bar_component_1.NavBarComponent, test_error_component_1.TestErrorComponent, not_found_component_1.NotFoundComponent, server_error_component_1.ServerErrorComponent, section_header_component_1.SectionHeaderComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true
                })
            ],
            exports: [
                nav_bar_component_1.NavBarComponent,
                section_header_component_1.SectionHeaderComponent
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
