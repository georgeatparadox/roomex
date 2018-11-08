import { Action } from '@ngrx/store';
import {
  createFormGroupState,
  createFormStateReducerWithUpdate,
  disable,
  enable,
  formGroupReducer,
  FormGroupState,
  updateGroup,
  validate,
} from 'ngrx-forms';
import { email, maxLength, minLength, pattern, required } from 'ngrx-forms/validation';

import { PersonalDetails } from '../../models/personal-details.model';

export interface FormState {
  personalDetails: PersonalDetails;
}

const FORM_ID = 'formState';

export const initialPaxFormState: FormGroupState<FormState> = createFormGroupState<FormState>(
  FORM_ID,
  {
    personalDetails: {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      country: '',
      postCode: ''
    }
  }
);

const validationFormGroupReducer = createFormStateReducerWithUpdate<PersonalDetails>(updateGroup<PersonalDetails>({
  title: validate(required),
  firstName: validate(required),
  lastName: validate(required),
  email: validate(email)
}));

export const validateAndUpdateForm = updateGroup<FormState>({
  personalDetails: updateGroup<PersonalDetails>({
    title: validate(required),
    firstName: validate(required),
    lastName:  (state, parentState) => {
      if (!parentState.value.firstName) {
         return disable(state);
      } else {
        return enable(state);
      }
    },
    email: validate(email),
    country: validate(required),
    postCode: (state, parentState) => {
      if (parentState.value.country === 'United Kingdom') {
        state = validate(state, required, pattern(/^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/));
      } else if (state.value.length > 0) {
        state = validate(state, minLength(6), maxLength(10));
      }
      return state;
    }
  })
});

export function formReducer(
  state: FormGroupState<FormState> = initialPaxFormState,
  action: Action
): FormGroupState<FormState> {
  const myForm = validateAndUpdateForm(formGroupReducer(state, action));
  if (myForm !== state) {
    state = { ...myForm };
  }

  switch (action.type) {
    // case 'some action type':
    //   return state;

    default: {
      return state;
    }
  }
}
