import {Component, OnInit} from '@angular/core';
import {FormBuilder, UntypedFormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

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
    this.dialogRef.close();
  }
}
