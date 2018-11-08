import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { SetValueAction } from 'ngrx-forms';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { SetSubmittedValueAction } from '../actions/app-actions';
import { AppState } from '../reducers/app.reducer';
import { getIsValidForm } from '../selectors/app.selectors';
import { DataAtWork } from './../../models/dataatwork.model';
import { DataAtWorkFailAction, DataAtWorkSuccessAction } from './../actions/app-actions';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router,
    private http: HttpClient
  ) {}

  @Effect({dispatch: false})
  public redirectToThankyou$: Observable<{}> = this.actions$.pipe(
    ofType(SetSubmittedValueAction.TYPE),
    withLatestFrom(
      this.store.pipe(select(getIsValidForm))
    ),
    tap((isValid) => isValid && this.router.navigate(['thankyou']))
  );

  @Effect()
  public fetchJobs$: Observable<any> = this.actions$.pipe(
    ofType(SetValueAction.TYPE),
    filter((payload: SetValueAction<any>) =>
      payload.controlId === 'formState.personalDetails.occupation' && payload.value.length > 2),
    tap(console.log),
    tap(({controlId}) => console.log(controlId)),
    switchMap(({value}) => {
      return this.http.get(`http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${value}`)
        .pipe(
          map((data: DataAtWork[]) => new DataAtWorkSuccessAction(data)),
          catchError((error: HttpErrorResponse) => of(new DataAtWorkFailAction()))
        );
    })
  );
}
