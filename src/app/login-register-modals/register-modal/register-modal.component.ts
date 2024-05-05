import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, UntypedFormGroup} from "@angular/forms";
import {UserServiceService} from "../../services/user-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit{

  registerForm!: UntypedFormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private fb: FormBuilder,
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: '',
      email: '',
      password: ''
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onRegisterClick(): void {
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;
    const emailString = this.registerForm.get('email')?.value ? this.registerForm.get('email')?.value : '';
    const email = emailString.length == 0 ? undefined : emailString;
    this.userService.register(username, password, email);
    this.dialogRef.close();
    this.snackBar.open('Successfully registered!', 'Close', {duration: 3000});
  }
}
