import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getPaginatorData(pageNumber) {
    return this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=kitten&api_key=c124f76ad3ea206cd2c440bf2d5f0e98&format=json&nojsoncallback=?&per_page=30&page=${pageNumber}`)
  }

}
