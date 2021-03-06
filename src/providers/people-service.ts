import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

  http:any;

  constructor(http: Http) {
    this.http = http;
  }

  getPeoples(){
    return this.http.get("https://randomuser.me/api/?results=10").map(res => res.json());
  }

}
