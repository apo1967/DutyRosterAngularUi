import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

declare var UIkit: any;

// the route to the uploader
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'dru-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dru';
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public showAlert(): void {
    UIkit.modal.alert('UIkit is working!');
  }
}
