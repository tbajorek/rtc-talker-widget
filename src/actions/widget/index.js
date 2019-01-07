import { createAction } from 'redux-actions';

import { resetUsers } from '../users';
import { resetRate } from './rate';
import { resetMessages } from '../message';
import { resetCall } from './call';
import {reloadConfig} from "../config";
import {showIndicator} from "./button";

export const SET_STATE = 'SET_STATE';
export const SET_VISIBLE = 'SET_VISIBLE';

export const setState = state => (dispatch) => {
  dispatch(createAction(SET_STATE)({ state }));
  if (state === 'init') {
    dispatch(resetUsers());
    dispatch(resetRate());
    dispatch(resetMessages());
    dispatch(resetCall());
    dispatch(reloadConfig());
  }
};
export const setVisible = visible => (dispatch) => {
  dispatch(createAction(SET_VISIBLE)({ visible }));
  dispatch(showIndicator(!visible));
};
