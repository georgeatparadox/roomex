import { DataAtWorkFailAction, DataAtWorkSuccessAction } from './../actions/app-actions';

export interface DataAtWorkState {
  autocomplete: any[];
}

export const dataAtWorkInitialState = {
  autocomplete: []
};

export function dataAtWorkReducer(
  state: DataAtWorkState = dataAtWorkInitialState,
  action
): DataAtWorkState {
  switch (action.type) {
    case DataAtWorkSuccessAction.TYPE:
      return {
        ...state,
        autocomplete: action.payload
      };
    case DataAtWorkFailAction.TYPE:
      return {
        ...state,
        autocomplete: []
      };
    default:
      return state;
  }
}
