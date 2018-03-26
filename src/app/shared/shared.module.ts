import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatSortModule,
  MatListModule,
  MatSelectModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';
@NgModule({
  imports: [
      CommonModule,
      MDBBootstrapModule.forRoot()
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule
  ],

  declarations: []
})
export class SharedModule { }
