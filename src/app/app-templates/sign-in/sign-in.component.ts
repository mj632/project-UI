import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { UserService } from '../../app-user/user/user.service';
import { UserLogInDetails } from '../../app-beans/user.log.in.details';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {
	userLogInForm:FormGroup;
	title = 'Sign In';
	signInErrorBanner: Boolean;

	constructor(private route:ActivatedRoute,
				private router:Router,
				private userservice:UserService,
				private titleService: Title
				) 
	{ 
	  	this.titleService.setTitle( this.title );
	  	this.signInErrorBanner = true;
	}

  ngOnInit() 
  {
		this.userLogInForm 	= new FormGroup({
			uEmail: new FormControl('', Validators.required),
			uPassword: new FormControl('', Validators.required)
		});
  }

  OnSubmit()
  {
  	let user:UserLogInDetails;
	this.userservice.logInUser(user);
  }

}
