import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { DocumentService } from './document.service';

import { AppComponent }  from './app.component';
import { NgbdDropdownBasic } from './dropdown/dropdown.component';
import { UploadDocComponent } from './uploadDoc/uploaddoc.component';
import { UploadDocFormComponent } from './uploadDocForm/uploaddocform.component';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [NgbModule.forRoot(), BrowserModule, FormsModule,
        RouterModule.forRoot([
            {
                path: 'documents',
                component: UploadDocComponent
            },
          {
                path: 'upload',
                component: UploadDocFormComponent
            },
            {
                path: '',
                redirectTo: '/documents',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [AppComponent, NgbdDropdownBasic, UploadDocComponent, UploadDocFormComponent],
    bootstrap: [AppComponent],
    providers: [DocumentService]
})
export class AppModule { }
