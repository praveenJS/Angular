import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';

const routes: Routes = [
   {path:'', component: WhatIsAngularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
