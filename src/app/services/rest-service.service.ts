import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user-service.service";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post( environment.apiUrl + '/user/register', user);
  }

  loginUser(username: string, password: string) {
    const user = {
      username,
      password
    };
    return this.http.post(environment.apiUrl + '/user/login', user);
  }

  finishUpload(payload: any) {
    return this.http.post(environment.apiUrl + '/finish_upload', payload);
  }

  getInstances(username: string) {
    return this.http.get(environment.apiUrl + '/get_instances/' + username);
  }

}
