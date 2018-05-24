import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FlowModule } from './flow/flow.module';
import { RapportModule } from './rapport/rapport.module';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FlowModule,
    RapportModule,
    SharedModule,
    DashboardModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
