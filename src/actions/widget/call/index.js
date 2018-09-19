import { createAction } from 'redux-actions';

import { setState, setVisible } from '../index';
import { setUsernameValidation, setDepartmentValidation } from '../init';

export const SET_INITIALIZING_CALL = 'SET_INITIALIZING_CALL';
export const SET_CALL_TYPE = 'SET_CALL_TYPE';
export const SET_CONNECTING = 'SET_CONNECTING';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_WRITTEN_MESSAGE = 'SET_WRITTEN_MESSAGE';
export const SET_MUTE_AUDIO = 'SET_MUTE_AUDIO';
export const SET_MUTE_VIDEO = 'SET_MUTE_VIDEO';
export const END_CALL = 'END_CALL';
export const RESET_CALL = 'RESET_CALL';

export const setCallType = type => (dispatch) => {
  dispatch(createAction(SET_CALL_TYPE)({ type }));
  if (['video', 'audio'].indexOf(type) >= 0) {
    dispatch(setState('call-initializing'));
  } else {
    dispatch(setState('chat-initializing'));
  }
};

export const rejectedCall = () => dispatch => {
    dispatch(createAction(END_CALL)(null));
    dispatch(setVisible(false));
    dispatch(setState('init'));
};

export const endCall = () => (dispatch) => {
    dispatch(createAction(END_CALL)(null));
    dispatch(setState('rate'));
};
export const setInitializingCall = initializing => createAction(SET_INITIALIZING_CALL)({ initializing });
export const setConnecting = connecting => createAction(SET_CONNECTING)({ connecting });
export const setVolume = volume => createAction(SET_VOLUME)({ volume });
export const setWrittenMessage = writtenMessage => createAction(SET_WRITTEN_MESSAGE)({ writtenMessage });
export const setMuteAudio = muted => createAction(SET_MUTE_AUDIO)({ muted });
export const setMuteVideo = muted => createAction(SET_MUTE_VIDEO)({ muted });
export const resetCall = () => createAction(RESET_CALL)({});

export const startCall = (type, username, department) => (dispatch) => {
  const validUsername = (!!username && username.length !== 0 && username.trim().length !== 0);
  dispatch(setUsernameValidation(validUsername));
  const validDepartment = department !== null;
  dispatch(setDepartmentValidation(validDepartment));
  if (validUsername && validDepartment) {
    dispatch(setCallType(type));
    dispatch(setInitializingCall(true));
  }
};
