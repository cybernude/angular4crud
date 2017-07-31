import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

//create new page
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { ReportwithconditionComponent } from './reportwithcondition/reportwithcondition.component';

//import service
import { HusbandService } from './husband.service';
import { ProcedureService } from './procedure.service';

//import environment
import { environment } from '../environments/environment';



 
@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        DisplaypageComponent,
        ReportwithconditionComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ], 
    providers: [
        { provide: 'API_URL', useValue: environment.apiUrl },
        HusbandService,
        ProcedureService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
