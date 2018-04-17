import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import '../../app.config';


import { Observable } from 'rxjs/Observable';

import { UserDetails } from '../../app-beans/user.details';
import { UserLogInDetails } from '../../app-beans/user.log.in.details';

const httpOptions = {
					  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
					};

@Injectable()
export class UserService {

	private apiUrl = 'http://localhost:3000';
	constructor(private http:Http) {}

  saveUser(user:UserDetails):Observable<Map<String,String>>
  {
  	let saveUserUrl = this.apiUrl+'/sign-up';
  	let passVal = JSON.stringify(user);
  	console.log(user);
  	return this.http.post(saveUserUrl, httpOptions, passVal)
 					.map(resp => {return resp.json();})
 					.catch((error:any)=> Observable.throw("Server Down"));
  }

  logInUser(user:UserLogInDetails):Observable<Map<String,String>>
  {
    return null;
  }

  findAllUsers():Observable<UserDetails[]>
  {
  	let findAllUserUrl = this.apiUrl+'/dashboard';
  	return this.http.get(findAllUserUrl)
  			.map((res:Response) => res.json())
  			.catch((error:any) => Observable.throw(error.json().error || "Server down"));
  }
}
