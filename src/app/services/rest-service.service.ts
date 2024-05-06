import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user-service.service";

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post('http://localhost:5000/user/register', user);
  }

  loginUser(username: string, password: string) {
    const user = {
      username,
      password
    };
    return this.http.post('http://localhost:5000/user/login', user);
  }

  finishUpload(payload: any) {
    return this.http.post('http://localhost:5000/finish_upload', payload);
  }

}
