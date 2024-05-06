import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {UploadScanService} from "./upload-scan.service";
import {FileType} from "../enums";
import {UserServiceService} from "../services/user-service.service";

@Component({
  selector: 'app-upload-scan',
  templateUrl: './upload-scan.component.html',
  styleUrls: ['./upload-scan.component.scss']
})
export class UploadScanComponent {

  @Output()
  fileUploaded = new EventEmitter<FileUploadedEvent>();
  @Input()
  requiredFileType: string | undefined;
  @Input()
  fileType: FileType | undefined;

  fileName = '';
  uploadProgress: number | null | undefined;
  uploadSub: Subscription | null | undefined;

  constructor(private fileUploadService: UploadScanService, public userService: UserServiceService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploadService.uploadScan(file).subscribe({
      next: (response) => {
        this.fileUploaded.emit(new FileUploadedEvent(this.fileType, file));
        this.fileName = file.name;
        console.log('File uploaded successfully', response);
      },
      error: (error) => {
        console.error('Error uploading file', error);
      }
    });
  }

  cancelUpload() {
    this.uploadSub?.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}

export class FileUploadedEvent {

  fileType: FileType | undefined;
  file: File | undefined;

  constructor(fileType: FileType | undefined, file: File | undefined) {
    this.fileType = fileType;
    this.file = file;
  }
}
