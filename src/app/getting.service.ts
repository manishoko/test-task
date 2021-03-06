import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GettingService {
  private url = 'http://dev.api.fooddocs.ee/testtask';

  constructor(private http: Http) { }

  getInfo(): Observable<any> {
    return this.http.get(this.url);
  }

  /* Note: if you need api services than use these */
  // removeInfo(removeInfo) {
  //   return this.http.delete(this.url + '/' + removeInfo.id);
  // }
}
