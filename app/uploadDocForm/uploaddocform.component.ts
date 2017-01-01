import { Component, Input } from '@angular/core';
import {UploadDoc} from '../UploadDoc/uploaddoc.model';

@Component({
  moduleId: module.id,
  selector: 'uploadform',
  templateUrl: 'uploadddocform.component.html'
})

export class UploadDocFormComponent {
  model = new UploadDoc(1, 'Black book', 'Ajith Kumar', 'uploading', 10);


  submitted = false;
  onSubmit() { this.submitted = true; }

  uploadDoc() {
    this.model = new UploadDoc(1, '', '', 'uploading', 10);
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
