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


  getDocuments(): void {
    this.uploadDocs = this.documentService.getDocuments();
  }

  showform() {

  }
}
