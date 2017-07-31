import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HusbandService {
  myurl: any;
  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) { }

  getAllHusband() {
    return new Promise((resolve, reject) => {
      // this.myurl = 'http://localhost:3001/husband-api';
      this.http.get(`${this.url}/husband-api`)
      // this.http.get(this.myurl)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }


}
