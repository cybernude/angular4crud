import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProcedureService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) { }


  getReportProcedureByGetMethod(startdate: any, enddate: any) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/procedure/:${startdate}/:${enddate}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getReportProcedureByPostMethod(startdate: any, enddate: any) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/procedure`, {
        startdate: startdate,
        enddate: enddate
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
