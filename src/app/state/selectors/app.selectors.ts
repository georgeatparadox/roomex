import { createSelector } from '@ngrx/store';

import { AppState } from './../reducers/app.reducer';

const getEnterFormState = (state: AppState) => state.enterForm;

export const getIsValidForm = createSelector(
  getEnterFormState,
  state => state.isValid
);
