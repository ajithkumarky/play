import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: 'app/dropdown/dropdown-basic.html'
})
export class NgbdDropdownBasic {


@Input()  id=0;

  uploadFiles(event:any)
  {
    alert('upload Clicked :' +this.id);
  }

  downloadFiles(event:any)
  {
    alert('download Clicked :'+this.id );
  }

  deleteFiles(event:any)
  {
    alert('delete Clicked '+this.id);
  }
}
