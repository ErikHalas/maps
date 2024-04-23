import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestServiceService} from "./rest-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: Observable<User> = new Observable<User>();

  constructor(
    private restService: RestServiceService
  ) {
  }

  login(username: string, password: string) {
    this.restService.loginUser(username, password).subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: error => {
        console.log('There was an error!', error);
      }
    });
  }

  register(username: string, password: string, email?: string) {
    this.restService.registerUser({username, password, email}).subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: error => {
        console.log('There was an error!', error);
      }
    });
  }

  logout() {
    this.user = new Observable<User>();
  }
}


export interface User {
  username: string;
  email?: string;
  password: string;
}
