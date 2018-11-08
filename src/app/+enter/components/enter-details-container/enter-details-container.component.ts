import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { DataAtWorkState } from 'src/app/state/reducers/data-at-work.reducer';

import { SetSubmittedValueAction } from './../../../state/actions/app-actions';
import { AppState } from './../../../state/reducers/app.reducer';
import { FormState } from './../../../state/reducers/form.reducer';

@Component({
  selector: 'app-enter',
  templateUrl: './enter-details-container.component.html',
  styleUrls: ['./enter-details-container.component.scss']
})
export class EnterDetailsContainerComponent {
  public formState$: Observable<FormGroupState<FormState>>;
  public autocomplete$: Observable<DataAtWorkState>;
  public titles: string[];
  public countries: string[];

  constructor(private store: Store<AppState>) {
    this.formState$ = this.store.pipe(select(s => s.enterForm));
    this.autocomplete$ = this.store.pipe(select(s => s.dataAtWork));
    this.titles = ['Mr', 'Mrs', 'Ms', 'Dr'];
    this.countries = ['Ireland', 'United Kingdom'];
  }

  public onSubmit(): void {
    this.formState$.pipe(
      take(1),
      filter(s => s.isValid),
      map(s => new SetSubmittedValueAction(s.value.personalDetails)),
    ).subscribe(this.store);
  }
}
