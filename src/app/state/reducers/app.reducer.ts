import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';

import { RouterStateUrlModel } from '../../models';
import { formReducer, FormState } from '../../state/reducers/form.reducer';
import { dataAtWorkReducer, DataAtWorkState } from './data-at-work.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrlModel>;
  enterForm: FormGroupState<FormState>;
  dataAtWork: DataAtWorkState;
}

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  enterForm: formReducer,
  dataAtWork: dataAtWorkReducer
};
