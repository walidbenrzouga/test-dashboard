import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { dashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AdvComponent } from './adv/adv.component';
import { DescComponent } from './desc/desc.component';
import { StaffComponent } from './staff/staff.component';
import { DocComponent } from './doc/doc.component';
import { ContactComponent } from './contact/contact.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ApoinComponent } from './apoin/apoin.component';
import { DeleveryManComponent } from './delevery-man/delevery-man.component';
import { PlanProjectComponent } from './plan-project/plan-project.component';
import { MeetingManComponent } from './meeting-man/meeting-man.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdvComponent,
    DescComponent,
    StaffComponent,
    DocComponent,
    ContactComponent,
    ToDoComponent,
    ApoinComponent,
    DeleveryManComponent,
    PlanProjectComponent,
    MeetingManComponent,
    SideMenuComponent
  ],
  imports: [
    RouterModule.forRoot(dashboardRoutes),
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
