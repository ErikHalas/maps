import { Component } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {

  isUserLoggedIn: boolean = false;

  constructor(
    private userService: UserServiceService
  ) {
    this.userService.user.pipe(
      take(1),
      tap(user => this.isUserLoggedIn = !!user)
    )
  }

  login() {
    this.userService.login('usernametest', 'passwordtest');
  }

  register() {
    this.userService.register('usernametest', 'passwordtest');
  }

  logout() {
    this.userService.logout();
  }

}
