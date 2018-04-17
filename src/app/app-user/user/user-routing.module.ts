import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from '../../app-templates/sign-up/sign-up.component';
import { SignInComponent } from '../../app-templates/sign-in/sign-in.component';
import { UserProfileComponent } from '../../app-templates/user-profile/user-profile.component';

const routes: Routes = [
{ path: 'sign-up', component:SignUpComponent },
{ path: 'sign-in', component:SignInComponent },
{ path: 'user-profile', component:UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
