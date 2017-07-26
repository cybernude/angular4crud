import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HusbandService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) { }

  getAllHusband() {
    // console.log("in to get all husband service");
    // console.log(this.url);
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/husband-api`)
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
