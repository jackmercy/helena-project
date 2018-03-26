import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './components/homepage.component';

/* Modules */
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SuppriseComponent } from './components/supprise.component';
import { MemoriesComponent } from './components/memories.component';
@NgModule({
  imports: [
      CommonModule,
      HomeRoutingModule,

      CoreModule,
      SharedModule,
      MDBBootstrapModule.forRoot()
  ],
  exports: [
      HomepageComponent
  ],
  declarations: [
      HomepageComponent,
      SuppriseComponent,
      MemoriesComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
