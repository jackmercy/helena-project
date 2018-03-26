import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
/* Modules */
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PublicComponent } from './components/public.component';
@NgModule({

  imports: [
    CommonModule,

    CoreModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [LoginComponent, PublicComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PublicModule { }
