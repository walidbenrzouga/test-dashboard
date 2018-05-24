import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FlowComponent } from './flow.component';
import { flowRoutes } from './flow.routing';

@NgModule({
  declarations: [
    FlowComponent
  ],
  imports: [
    RouterModule.forRoot(flowRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class FlowModule { }
