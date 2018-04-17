export class UserDetails{
	
	uid:number;
	uEmail:String;
	uPassword:String;
	uName:String;
	uDob:Date;
	uStreet1:String;
	uStreet2:String;
	uPin:number;
	uContact:number;

	constructor(uid:number, 
				uEmail:String, 
				uPassword:String, 
				uName:String,
				uDob:Date,
				uStreet1:String,
				uStreet2:String,
				uPin:number,
				uContact:number
				) 
	{
		this.uid = uid;
		this.uEmail = uEmail;
		this.uPassword = uPassword;
		this.uName=uName;
		this.uDob=uDob;
		this.uStreet1=uStreet1;
		this.uStreet2=uStreet2;
		this.uPin=uPin;
		this.uContact=uContact;
	}
}