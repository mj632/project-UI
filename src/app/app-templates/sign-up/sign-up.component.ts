import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { UserService } from '../../app-user/user/user.service';
import { UserDetails } from '../../app-beans/user.details';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit, OnDestroy {

	user:UserDetails;
	userForm:FormGroup;
	title = 'Sign Up';
	signUpErrorBanner: Boolean
	
	constructor(private route:ActivatedRoute,
				private router:Router,
				private userservice:UserService,
				private titleService: Title
				) 
	{ 
	  	this.titleService.setTitle( this.title );
	  	this.signUpErrorBanner = true;
	}

	ngOnInit() 
	{
		this.userForm 	= new FormGroup({
			uEmail: new FormControl('', Validators.required),
			uPassword: new FormControl('', Validators.required)
		});
		// console.log(this.userForm);
	}

	ngOnDestroy():void { }

	OnSubmit() 
	{
		if(this.userForm.valid)
		{
			let user: UserDetails = new UserDetails(
														null,
														this.userForm.controls['uEmail'].value,
														this.userForm.controls['uPassword'].value
													);
			this.userservice.saveUser(user)
				.subscribe( resp => this.checkResponse(resp));
		}
		this.userForm.reset({
			uEmail: '',
			uPassword: ''
		});
	}

	checkResponse(resp:Map<String,String>)
	{
		console.log(resp);
		for(var key in resp)
		{
			console.log(resp[key]);
			 if(resp[key] == "user added")
			{
				this.router.navigate(['/']);
				break;
			}
			else
			{
			  	this.signUpErrorBanner = false;
				break;
			}
		}	
	}
}
