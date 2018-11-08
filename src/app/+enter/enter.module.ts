import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgrxFormsModule } from 'ngrx-forms';

import { MaterialModule } from './../material/material.module';
import { EnterDetailsContainerComponent } from './components/enter-details-container/enter-details-container.component';
import { EnterDetailsComponent } from './components/enter-details/enter-details.component';
import { routes } from './enter.routes';

@NgModule({
  declarations: [EnterDetailsContainerComponent, EnterDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgrxFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MaterialModule
  ]
})
export class EnterModule { }
