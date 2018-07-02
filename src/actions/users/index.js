import { createAction } from 'redux-actions';

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_SINGLE_DATA = 'SET_USER_SINGLE_DATA';
export const SET_USER = 'SET_USER';
export const SET_RECEIVER_DATA = 'SET_RECEIVER_DATA';
export const SET_RECEIVER_SINGLE_DATA = 'SET_RECEIVER_SINGLE_DATA';
export const SET_RECEIVER = 'SET_RECEIVER';
export const RESET_USERS = 'RESET_USERS';

export const setUser = user => createAction(SET_USER)({ user });
export const setUserSingleData = (name, value) => createAction(SET_USER_SINGLE_DATA)({ name, value });
export const setUserData = (id, username, avatar) => createAction(SET_USER_DATA)({ id, username, avatar });
export const setReceiver = receiver => createAction(SET_RECEIVER)({ receiver });
export const setReceiverSingleData = (name, value) => createAction(SET_RECEIVER_DATA)({ name, value });
export const setReceiverData = (id, username, avatar) => createAction(SET_RECEIVER_DATA)({ id, username, avatar });
export const resetUsers = () => createAction(RESET_USERS)({});
