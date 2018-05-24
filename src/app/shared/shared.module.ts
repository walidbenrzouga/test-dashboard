import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    NgbModule.forRoot(),
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
