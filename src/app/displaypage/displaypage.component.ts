import { Component, OnInit, Inject } from '@angular/core';

//เรียกข้อมูลจาก service มา
import { HusbandService } from '../husband.service';


@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.scss']
})
export class DisplaypageComponent implements OnInit {
  allhusband: any = [];

  constructor(
    // @Inject('API_URL') private url: string,
    private husbandService: HusbandService
  ) { }

  ngOnInit() {
    this.ShowAllHusband();
  }


    ShowAllHusband() {
    this.allhusband = [];
    this.husbandService.getAllHusband()
      .then((results: any) => {
        if (results.ok) {
          this.allhusband = results.rows;
        } else {
          console.log(JSON.stringify(results.error));
        }
      })
      .catch(() => {
        console.log("Server Error");
      });
  }

}
