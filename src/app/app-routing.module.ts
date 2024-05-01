import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {UploadScanComponent} from "./upload-scan/upload-scan.component";


const routes: Routes = [
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'upload-scan', component: UploadScanComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
