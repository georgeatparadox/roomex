import { MatAutocompleteModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDetailsComponent } from './enter-details.component';

describe('EnterComponent', () => {
  let component: EnterDetailsComponent;
  let fixture: ComponentFixture<EnterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDetailsComponent ],
      imports: [MatAutocompleteModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should not set suggestion', () => {
    const initialFilteredOptions = component.filteredOptions;
    const test = {titles: []};
    component.ngOnChanges(test);
    expect(component.filteredOptions).toEqual(initialFilteredOptions);
  });

  it('should map the autocomplete values', () => {
    const test = {
        autocomplete: {
          currentValue: {
            autocomplete: [{
              normalized_job_title: '',
              parent_uuid: '',
              suggestion: 'Developer',
              uuid: ''
            }]
          }
        }
    };
    const expected = [{name: 'Developer'}];
    component.ngOnChanges(test);
    expect(component.filteredOptions).toEqual(expected);
  });
});
