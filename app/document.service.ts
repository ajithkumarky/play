import { Injectable } from '@angular/core';
import { UploadDoc } from './uploadDoc/uploaddoc.model';
import { UPLOADDOCS } from './mock.documents';

@Injectable()
export class DocumentService {

    getDocuments(): Promise<UploadDoc[]> {
        return Promise.resolve(UPLOADDOCS);
    }

    addDocument(uploadDoc: UploadDoc): Promise<UploadDoc[]> {
        UPLOADDOCS.push(uploadDoc);
        return Promise.resolve(UPLOADDOCS);

    }

getDocumentsSlowly(): Promise < UploadDoc[] > {
    return new Promise(resolve => {
        setTimeout(() => resolve(this.getDocuments()), 300);
    });
}
}
