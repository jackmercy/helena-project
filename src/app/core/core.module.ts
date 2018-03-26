import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreService } from './services/core.service';
import { NavigationComponent } from './components/navigation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [NavigationComponent],
  providers: [CoreService]
})
export class CoreModule { }
