import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public currentUrl: String = ''
  
  constructor(private router: Router){
  	console.log("App started");
  	localStorage.setItem('ratingList',JSON.stringify({}));
    localStorage.setItem('pageNumber', '1');
  	this.router.events.subscribe((res) => { 
    	this.currentUrl= this.router.url
	})
  }

	
}
