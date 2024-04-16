import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {HeaderComponent} from "./header/header.component";


const routes: Routes = [
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'daco', component: HeaderComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
