import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserDetails } from '../../app-beans/user.details';
import { UserService } from '../../app-user/user/user.service';
// import { LoaderComponent } from '../../app-components/loader/loader.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

	private users : UserDetails[];
	title = 'Home';
	private isLoading = true;
	constructor(private userservice:UserService, private titleService: Title) {
	}

	ngOnInit() {
		// this.getAllUsers();
	  	this.titleService.setTitle( this.title );
	}

	getAllUsers()
	{
		this.userservice.findAllUsers().subscribe(
			users => {
				this.users = users;
			},
			err => {
				console.log(err);
			});
	}

}
