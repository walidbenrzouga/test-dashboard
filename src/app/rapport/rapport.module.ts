import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { RapportComponent } from './rapport.component';
import { rapportRoutes } from './rapport.routing';

@NgModule({
  declarations: [
    RapportComponent
  ],
  imports: [
    RouterModule.forRoot(rapportRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class RapportModule { }
