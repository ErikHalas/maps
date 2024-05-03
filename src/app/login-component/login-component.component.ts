import { Component } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";
import {take, tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {RegisterModalComponent} from "../login-register-modals/register-modal/register-modal.component";
import {LoginModalComponent} from "../login-register-modals/login-modal/login-modal.component";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {

  isUserLoggedIn: boolean = false;

  constructor(
    private userService: UserServiceService,
    public dialog: MatDialog
  ) {
    this.userService.user.pipe(
      take(1),
      tap(user => this.isUserLoggedIn = !!user)
    )
  }

  openRegisterModal(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
