import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from '../../app-templates/sign-up/sign-up.component';
import { SignInComponent } from '../../app-templates/sign-in/sign-in.component';
import { UserProfileComponent } from '../../app-templates/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignUpComponent,
    SignInComponent,
    UserProfileComponent
]
})
export class UserModule { }
