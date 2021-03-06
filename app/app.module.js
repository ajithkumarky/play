"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var document_service_1 = require('./document.service');
var app_component_1 = require('./app.component');
var dropdown_component_1 = require('./dropdown/dropdown.component');
var uploaddoc_component_1 = require('./uploadDoc/uploaddoc.component');
var uploaddocform_component_1 = require('./uploadDocForm/uploaddocform.component');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [ng_bootstrap_1.NgbModule.forRoot(), platform_browser_1.BrowserModule, forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'documents',
                        component: uploaddoc_component_1.UploadDocComponent
                    },
                    {
                        path: 'upload',
                        component: uploaddocform_component_1.UploadDocFormComponent
                    },
                    {
                        path: '',
                        redirectTo: '/documents',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, dropdown_component_1.NgbdDropdownBasic, uploaddoc_component_1.UploadDocComponent, uploaddocform_component_1.UploadDocFormComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [document_service_1.DocumentService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map