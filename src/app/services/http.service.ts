import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getPaginatorData(pageNumber) {
    return this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=kitten&api_key={flickr_api_key}&format=json&nojsoncallback=?&per_page=30&page=${pageNumber}`)
  }

}
