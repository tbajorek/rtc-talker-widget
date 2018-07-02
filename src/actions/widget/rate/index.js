import { createAction } from 'redux-actions';

import { setState, setVisible } from '../index';

export const SET_RATE = 'SET_RATE';
export const SET_COMMENT = 'SET_COMMENT';
export const SEND_RATE = 'SEND_RATE';
export const RESET_RATE = 'RESET_RATE';

export const setRate = rate => createAction(SET_RATE)({ rate });
export const setComment = comment => createAction(SET_COMMENT)({ comment });
export const resetRate = () => createAction(RESET_RATE)({});

export const rejectRate = () => (dispatch) => {
  dispatch(setState('init'));
  dispatch(setVisible(false));
};

export const sendRate = (userId, receiverId, rate, comment) => (dispatch) => {
  dispatch(createAction(SEND_RATE)({
    userId, receiverId, rate, comment,
  }));
  dispatch(rejectRate());
};
