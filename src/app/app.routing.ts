/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

//page หรือ หน้าแสดง ข้อมูล angular จะเรียกว่า component 
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { ReportwithconditionComponent } from './reportwithcondition/reportwithcondition.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'displaypage', component: DisplaypageComponent},
    {path: 'reports', component: ReportwithconditionComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
