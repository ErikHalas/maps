import { Component } from '@angular/core';
import {FileType} from "../enums";
import {FileUploadedEvent} from "../upload-scan/upload-scan.component";
import {UserServiceService} from "../services/user-service.service";
import {RestServiceService} from "../services/rest-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-scan-page',
  templateUrl: './upload-scan-page.component.html',
  styleUrls: ['./upload-scan-page.component.scss']
})
export class UploadScanPageComponent {

  FileTypesEnum = FileType;
  dcomUploaded = false;
  maskUploaded = false;

  filesUploaded: [
    FileUploadedEvent?, //DCOM
    FileUploadedEvent? // MASK
  ] = [undefined, undefined];

  constructor(public userService: UserServiceService, public restService: RestServiceService, public router: Router) { }

  onFileUploaded(fileType: FileUploadedEvent) {
    switch (fileType.fileType) {
      case FileType.DCOM:
        this.dcomUploaded = true;
        this.filesUploaded[0] = fileType;
        break;
      case FileType.MASK:
        this.maskUploaded = true;
        this.filesUploaded[1] = fileType;
        break;
      default:
        console.error('Unknown file type uploaded');
    }
  }

  finishUpload() {
    const payload = {
      username: this.userService.user.username,
      dcom: this.filesUploaded[0]?.file?.name,
      mask: this.filesUploaded[1]?.file?.name
    }
    this.restService.finishUpload(payload).subscribe({
      next: (response) => {
        console.log('Upload finished successfully', response);
        this.router.navigate(['/']);
      }
    });
  }



}
