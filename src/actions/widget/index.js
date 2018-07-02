import { createAction } from 'redux-actions';

import { resetUsers } from '../users';
import { resetRate } from './rate';
import { resetMessages } from '../message';
import { resetCall } from './call';

export const SET_STATE = 'SET_STATE';
export const SET_VISIBLE = 'SET_VISIBLE';

export const setState = state => (dispatch) => {
  dispatch(createAction(SET_STATE)({ state }));
  if (state === 'init') {
    dispatch(resetUsers());
    dispatch(resetRate());
    dispatch(resetMessages());
    dispatch(resetCall());
  }
};
export const setVisible = visible => createAction(SET_VISIBLE)({ visible });
