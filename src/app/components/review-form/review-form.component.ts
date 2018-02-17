import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  saveReview(form){
    if(!form.rating){
      form.rating = 1
    }
  	let id = String(JSON.parse(localStorage.getItem('photo')).id);
  	let ratingList = JSON.parse(localStorage.getItem('ratingList'));
  	ratingList[id] = form.rating;
  	localStorage.setItem('ratingList',JSON.stringify(ratingList))
  	this.router.navigate(['home'])
  }
}
