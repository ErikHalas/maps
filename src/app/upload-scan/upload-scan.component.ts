import {Component, Input} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Subscription} from "rxjs";

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

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("dicom", file);
      formData.append("name", file.name);

      const upload$ = this.http.post("http://localhost:5000/upload_scan", formData, {
        reportProgress: true,
        observe: 'events'
      })
          .pipe(
              finalize(() => this.reset())
          );

      this.uploadSub = upload$.subscribe((event: any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
      })
    }
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
