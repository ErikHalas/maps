import {Component, OnInit} from '@angular/core';
import {FormBuilder, UntypedFormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {UserServiceService} from "../../services/user-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit{

  loginForm!: UntypedFormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private fb: FormBuilder,
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: '',
      email: '',
      password: ''
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.userService.login(username, password);
    this.dialogRef.close();
    this.snackBar.open('Successfully logged in!', 'Close', {duration: 3000});
  }
}
