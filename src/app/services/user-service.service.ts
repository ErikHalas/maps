import {Injectable} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {RestServiceService} from "./rest-service.service";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User = new User();
  isUserLoggedIn: boolean = false;

  constructor(
    private restService: RestServiceService
  ) {
  }

  login(username: string, password: string): Observable<User> {
    return new Observable<User>((observer) => {
      const subscription: Subscription = this.restService.loginUser(username, password).subscribe({
        next: (data: any) => {
          const user: User = { username: data.username, password: "password" };
          this.user = user;
          this.isUserLoggedIn = true;
          observer.next(user);
          observer.complete();
        },
        error: error => {
          console.log('There was an error!', error);
          observer.error(error);
        }
      });

      // Unsubscribe logic, called when the subscription is unsubscribed
      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    });
  }

  register(username: string, password: string, email?: string): Observable<User> {
    return new Observable<User>((observer) => {
      const subscription: Subscription = this.restService.registerUser({username, password, email}).subscribe({
        next: (data: any) => {
          const user: User = {username: data.username, password: "password"};
          this.user = user;
          this.isUserLoggedIn = true;
          observer.next(user);
          observer.complete();
        },
        error: error => {
          console.log('There was an error!', error);
          observer.error(error);
        }
      });

      // Unsubscribe logic, called when the subscription is unsubscribed
      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    });
  }

  logout() {
    this.user = new User();
    this.isUserLoggedIn = false;
  }
}


export class User {
  username: string | undefined;
  email?: string;
  password: string | undefined;
}
