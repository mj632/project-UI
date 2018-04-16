export class UserDetails{
	
	uid:number;
	uEmail:String;
	uPassword:String;

	constructor(uid:number, uEmail:String, uPassword:String) {
		this.uid = uid;
		this.uEmail = uEmail;
		this.uPassword = uPassword;
	}
}