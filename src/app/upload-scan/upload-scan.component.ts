import {Component, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {UploadScanService} from "./upload-scan.service";

@Component({
  selector: 'app-upload-scan',
  templateUrl: './upload-scan.component.html',
  styleUrls: ['./upload-scan.component.scss']
})
export class UploadScanComponent {


  @Input()
  requiredFileType: string | undefined;

  fileName = '';
  uploadProgress: number | null | undefined;
  uploadSub: Subscription | null | undefined;

  constructor(private fileUploadService: UploadScanService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploadService.uploadScan(file).subscribe({
      next: (response) => {
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
