import { DataAtWorkSuccessAction, DataAtWorkFailAction } from './../actions/app-actions';
import { dataAtWorkReducer, dataAtWorkInitialState } from './data-at-work.reducer';

describe('dataAtWorkReducer', () => {
  it('should initialize', () => {
    expect(
      dataAtWorkReducer(dataAtWorkInitialState, {})
    ).toEqual(dataAtWorkInitialState);
  });

  it('should handle DATA_AT_WORK_SUCCESS', () => {
    const state = {autocomplete: ['initial Data']};
    const payload = {autocomplete: ['fetched Data']};

    expect(
      dataAtWorkReducer(state, {
        type: DataAtWorkSuccessAction.TYPE,
        payload
      })
    ).toEqual({
      ...state,
      autocomplete: payload as any
    });
  });

  it('should handle DATA_AT_WORK_FAIL', () => {
    const state = {autocomplete: ['initial Data']};

    expect(
      dataAtWorkReducer(state, {
        type: DataAtWorkFailAction.TYPE
      })
    ).toEqual({
      ...state,
      autocomplete: []
    });
  });
});
