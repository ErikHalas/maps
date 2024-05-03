import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, UntypedFormGroup} from "@angular/forms";

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
    this.dialogRef.close();
  }
}
