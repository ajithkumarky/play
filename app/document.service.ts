import { Injectable } from '@angular/core';
import { UploadDoc } from './uploadDoc/uploaddoc.model';
import { UPLOADDOCS } from './mock.documents';

@Injectable()
export class DocumentService {

  getDocuments(): UploadDoc[] {
    return UPLOADDOCS;
  }
}
