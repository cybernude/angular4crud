import { Component, OnInit, Inject } from '@angular/core';

//import service
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-reportwithcondition',
  templateUrl: './reportwithcondition.component.html',
  styleUrls: ['./reportwithcondition.component.scss']
})
export class ReportwithconditionComponent implements OnInit {
  loading = false;
  reportresult: any = [];

  startdate: any;
  enddate: any;

  constructor(
    private procedureService: ProcedureService
  ) { }

 ngOnInit() {
    // await this.showReportData();
  }

  
    showReportData() {
    this.reportresult = [];
    this.procedureService.getReportProcedureByGetMethod(this.startdate, this.enddate)
      .then((results: any) => {
        if (results.ok) {
          this.reportresult = results.rows;
          //check result data
          console.log(this.reportresult);
        } else {
          console.log(JSON.stringify(results.error));
        }
      })
      .catch(() => {
        console.log("Server Error");
      });
  }

  showPostData() {
    this.reportresult = [];
    this.loading = true;
    this.procedureService.getReportProcedureByPostMethod(this.startdate, this.enddate)
      .then((results: any) => {
        if (results.ok) {
          this.reportresult = results.rows;
          //check result data
          this.loading = false;
          console.log(this.reportresult);
        } else {
          console.log(JSON.stringify(results.error));
        }
      })
      .catch(() => {
        console.log("Server Error");
      });
  }

  showReportCondition(){
    // console.log(this.startdate);
    // console.log(this.enddate);
    this.showReportData();
  }

  showReportConditionPost(){
    this.showPostData();
  }
}
