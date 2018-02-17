import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  public imageList: any = [];
  public imagesReviewed :number = 0;
  public showPaginatorOption: boolean = false;
  public pageNumber:number = Number(localStorage.getItem('pageNumber'));
  public totalPages:number = 0;

  ngOnInit() {
    this.getData(this.pageNumber)
  }

  showData(data) {
    window.scrollTo(0, 0)
    let imageData = JSON.parse(data._body).photos
  	this.imageList = imageData.photo;
    this.pageNumber = Number(imageData.page);
    this.totalPages = imageData.pages;
    let ratingList = JSON.parse(localStorage.getItem('ratingList'))
    this.imagesReviewed = Object.keys(ratingList).length
  	this.imageList
  		.map((element) =>{
  			element['imageSrc'] = `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`
        if(ratingList[element.id]){
          element['rating'] = Number(ratingList[element.id])
        }
        else{
          element['rating'] = -1;
        }
  		});
    this.showPaginatorOption = true;
  }

  navigateToDetails(photo){
  	this.router.navigate(['details'])
    localStorage.setItem('photo',JSON.stringify(photo))
  }

  changeContent(navigation){
    if(navigation == 'next'){
      this.getData(this.pageNumber+1)
      localStorage.setItem('pageNumber', String(this.pageNumber+1));
    }
    else{
      this.getData(this.pageNumber-1)
      localStorage.setItem('pageNumber', String(this.pageNumber-1));
    }
  }

  getData(pageNumber){
    this.httpService.getPaginatorData(pageNumber).subscribe((data) => this.showData(data))
  }

}
