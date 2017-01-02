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
var uploaddoc_model_1 = require('../UploadDoc/uploaddoc.model');
var document_service_1 = require('../document.service');
var UploadDocFormComponent = (function () {
    function UploadDocFormComponent(documentService) {
        this.documentService = documentService;
        this.onComplete = new core_1.EventEmitter();
        this.model = new uploaddoc_model_1.UploadDoc(1, 'Black book', 'Ajith Kumar', 'uploading', 10);
        this.submitted = false;
    }
    UploadDocFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    UploadDocFormComponent.prototype.uploadDoc = function () {
        this.uploadStuff = new uploaddoc_model_1.UploadDoc(1, this.model.documentName, this.model.clientName, 'Uploading', 0);
        this.documentService.addDocument(this.uploadStuff).then();
        this.onComplete.emit(true);
    };
    UploadDocFormComponent.prototype.fileChange = function (event) {
        /*
          let fileList: FileList = event.target.files;
          if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            this.http.post(`${this.apiEndPoint}`, formData, options)
              .map(res => res.json())
              .catch(error => Observable.throw(error))
              .subscribe(
              data => console.log('success'),
              error => console.log(error)
              )
          }
        */ };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UploadDocFormComponent.prototype, "onComplete", void 0);
    UploadDocFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'uploadform',
            templateUrl: 'uploadddocform.component.html',
            providers: [document_service_1.DocumentService]
        }), 
        __metadata('design:paramtypes', [document_service_1.DocumentService])
    ], UploadDocFormComponent);
    return UploadDocFormComponent;
}());
exports.UploadDocFormComponent = UploadDocFormComponent;
//# sourceMappingURL=uploaddocform.component.js.map