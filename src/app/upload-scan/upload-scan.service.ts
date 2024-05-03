import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadScanService {

  constructor(private http: HttpClient) { }

  uploadScan(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:5000/upload_scan', formData);
  }
}
