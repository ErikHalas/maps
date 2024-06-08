import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class UploadScanService {

  constructor(private http: HttpClient) { }

  uploadScan(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(environment.apiUrl + '/upload_scan', formData);
  }
}
