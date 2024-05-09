import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {UploadScanPageComponent} from "./upload-scan-page/upload-scan-page.component";
import {ResultPageComponent} from "./result-page/result-page.component"
import {ResultTableComponent} from "./result-table/result-table.component";


const routes: Routes = [
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'upload-scan', component: UploadScanPageComponent, pathMatch: 'full' },
  { path: 'result-page', component: ResultPageComponent, pathMatch: 'full' },
  { path: 'result-table', component: ResultTableComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
