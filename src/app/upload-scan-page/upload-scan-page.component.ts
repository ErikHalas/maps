import { Component } from '@angular/core';
import {FileType} from "../enums";
import {FileUploadedEvent} from "../upload-scan/upload-scan.component";
import {UserServiceService} from "../services/user-service.service";
import {RestServiceService} from "../services/rest-service.service";
import {Router} from "@angular/router";
import {delay} from "rxjs";
import {ResultPageService} from "../services/result-page.service";
import {Results} from "../result-page/result-page.component";

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

  constructor(public userService: UserServiceService, public restService: RestServiceService, public router: Router, public resultPageService: ResultPageService) { }

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
        this.resultPageService.setResults(response as Results);
        this.router.navigate(['/result-page'] );
      }
    });
  }



}
