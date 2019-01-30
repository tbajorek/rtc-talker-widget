import ActionCreator from "tbrtc-common/utilities/ActionCreator";

export const SET_USER = 'SET_USER';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_RECEIVER = 'SET_RECEIVER';
export const RESET_USERS = 'RESET_USERS';

export const setUser = user => ActionCreator.createAction(SET_USER, { user });
export const setUserId = userId => ActionCreator.createAction(SET_USER_ID, { userId });
export const setReceiver = receiver => ActionCreator.createAction(SET_RECEIVER, { receiver });
export const resetUsers = () => ActionCreator.createAction(RESET_USERS);
