import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreService } from './services/core.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CoreService]
})
export class CoreModule { }
