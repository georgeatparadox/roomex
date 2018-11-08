import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ThankyouComponent } from './thankyou.component';
import { routes } from './thankyou.routes';

@NgModule({
  declarations: [ThankyouComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class ThankyouModule { }
