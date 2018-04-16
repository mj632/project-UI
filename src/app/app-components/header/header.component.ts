import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	private isUserLoggedIn:boolean;
  	constructor() { }

  ngOnInit() {
  	this.isUserLoggedIn = false;
  }

}
