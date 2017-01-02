import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UploadDoc} from '../UploadDoc/uploaddoc.model';
import { DocumentService } from '../document.service';

@Component({
  moduleId: module.id,
  selector: 'uploadform',
  templateUrl: 'uploadddocform.component.html',
    providers: [DocumentService]
})

export class UploadDocFormComponent {

@Output() onComplete = new EventEmitter<boolean>();

  model = new UploadDoc(1, 'Black book', 'Ajith Kumar', 'uploading', 10);
constructor(private documentService: DocumentService) { }
  uploadStuff: UploadDoc;
  submitted = false;
  onSubmit() { this.submitted = true; }

  uploadDoc() {

    this.uploadStuff= new UploadDoc(1, this.model.documentName, this.model.clientName, 'Uploading', 0);
    this.documentService.addDocument(this.uploadStuff).then();
    this.onComplete.emit(true);
  }

  fileChange(event:any) {
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
  */}
}
