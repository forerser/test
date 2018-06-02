import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the Proveedor2Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Proveedor2Provider {

  constructor(public http: HttpClient) {
    //console.log('Hello Proveedor2Provider Provider');
  }

  getUsers() {
    //return this.http.get('https://randomuser.me/api/?results=25');
    return this.http.get('http://residenconce.hol.es/Android/');
  }

}
