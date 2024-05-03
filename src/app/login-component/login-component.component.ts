import { Component } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterModalComponent} from "../login-register-modals/register-modal/register-modal.component";
import {LoginModalComponent} from "../login-register-modals/login-modal/login-modal.component";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {

  isUserLoggedIn: boolean = false;

  constructor(
    private userService: UserServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {

  }

  openRegisterModal(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '20em'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '20em'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  loggedIn(): boolean {
    return this.userService.isUserLoggedIn;
  }

  logout() {
    this.userService.logout();
    this.snackBar.open('Successfully logged out!', 'Close', {duration: 3000});
  }

}
