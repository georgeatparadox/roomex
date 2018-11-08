import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from './../state/reducers/app.reducer';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent {
  public submitted$: Observable<any>;
  public displayedColumns: string[] = ['field', 'value'];

  constructor(private store: Store<AppState>) {
    this.submitted$ = this.store.pipe(
      select(s => s.enterForm.value.personalDetails),
      map((data) => Object.keys(data).map(key => ({
        field: this.convertCamelCase(key), value: data[key]
      })))
    );
  }

  private convertCamelCase(str: string) {
    return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, strr => strr.toUpperCase());
  }
}
