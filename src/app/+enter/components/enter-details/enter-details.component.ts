import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroupState } from 'ngrx-forms';
import { DataAtWork } from 'src/app/models/dataatwork.model';

import { FormState } from '../../../state/reducers/form.reducer';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.scss']
})
export class EnterDetailsComponent implements OnChanges {
  @Input()
  public formState: FormGroupState<FormState>;
  @Input()
  public titles: string[];
  @Input()
  public countries: string[];
  @Input()
  public autocomplete: DataAtWork[];
  @Output()
  public submitForm: EventEmitter<void> = new EventEmitter();

  public myControl = new FormControl();
  public filteredOptions: any[];

  public ngOnChanges(changes: any) {
    if (changes.autocomplete) {
      this.filteredOptions = changes.autocomplete.currentValue.autocomplete.map((res) => {
        return {name: res.suggestion};
      });

    }
  }
}
