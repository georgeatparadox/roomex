import { Action } from '@ngrx/store';
import { DataAtWork } from 'src/app/models/dataatwork.model';

import { PersonalDetails } from './../../models/personal-details.model';

export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: PersonalDetails) { }
}

export class DataAtWorkSuccessAction implements Action {
  static readonly TYPE = 'DATA_AT_WORK_SUCCESS';
  readonly type = DataAtWorkSuccessAction.TYPE;
  constructor(public payload: DataAtWork[]) { }
}

export class DataAtWorkFailAction implements Action {
  static readonly TYPE = 'DATA_AT_WORK_FAIL';
  readonly type = DataAtWorkFailAction.TYPE;
  constructor() { }
}
