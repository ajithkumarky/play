import { Component, OnInit } from '@angular/core';
import {UploadDoc} from './uploaddoc.model';
import {UploadDocFormComponent} from "../uploadDocForm/uploaddocform.component";
import { DocumentService } from '../document.service';


@Component({
  moduleId: module.id,
  selector: 'upload',
  templateUrl: 'uploaddoc.component.html',
  providers: [DocumentService]
})
export class UploadDocComponent implements OnInit {

  ngOnInit(): void {
    this.getDocuments();
  }

constructor(private documentService: DocumentService) { }


  uploadDocs: UploadDoc[];
  uploadStuff: UploadDoc;


  getDocuments(): void {
     this.documentService.getDocumentsSlowly().then(uploadDocs=>this.uploadDocs = uploadDocs);
  }

  showform() {
    this.uploadStuff= new UploadDoc(1, 'Black book', 'Ajith Kumar', 'uploading', 10);
    this.documentService.addDocument(this.uploadStuff).then(uploadDocs=>this.uploadDocs = uploadDocs);

  }
}
