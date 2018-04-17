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
	userDetailsForm:FormGroup;
	title = 'Sign Up';
	signUpErrorBanner: Boolean;

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
		this.userDetailsForm 	= new FormGroup({
			uEmail: new FormControl('', Validators.required),
			uPassword: new FormControl('', Validators.required),
			fName: new FormControl('', Validators.required),
			lName: new FormControl('', Validators.required),
			uDob:new FormControl(null, Validators.required),
			uStreet1:new FormControl('', Validators.required),
			uStreet2:new FormControl('', Validators.required),
			uPin:new FormControl(null, Validators.required),
			uContact:new FormControl(null, Validators.required)
		});
	}

	ngOnDestroy():void { }

	OnSubmit() 
	{

		if(this.userDetailsForm.valid)
		{
			let user: UserDetails = new UserDetails(
														null,
														this.userDetailsForm.controls['uEmail'].value,
														this.userDetailsForm.controls['uPassword'].value,
														this.userDetailsForm.controls['fName'].value + 
														' ' + this.userDetailsForm.controls['lName'].value,
														this.userDetailsForm.controls['uDob'].value,
														this.userDetailsForm.controls['uStreet1'].value,
														this.userDetailsForm.controls['uStreet2'].value,
														this.userDetailsForm.controls['uPin'].value,
														this.userDetailsForm.controls['uContact'].value
													);
			this.userservice.saveUser(user)
				.subscribe( resp => this.checkResponse(resp));
		}
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

		this.resetFormDetails();
	}

	resetFormDetails()
	{
		this.userDetailsForm.reset({
			uEmail: '',
			uPassword: '',
			uName:'',
			uDob: null,
			uStreet1:'',
			uStreet2:'',
			uPin:null,
			uContact:null

		});

	}
}
