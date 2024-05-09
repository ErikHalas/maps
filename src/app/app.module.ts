import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {UploadScanComponent} from "./upload-scan/upload-scan.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { RegisterModalComponent } from './login-register-modals/register-modal/register-modal.component';
import { LoginModalComponent } from './login-register-modals/login-modal/login-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { UploadScanPageComponent } from './upload-scan-page/upload-scan-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoHeaderComponent,
    LoginComponentComponent,
    WelcomePageComponent,
    GenericButtonComponent,
    UploadScanComponent,
    RegisterModalComponent,
    LoginModalComponent,
    UploadScanPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
