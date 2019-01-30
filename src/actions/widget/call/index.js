import ActionCreator from "tbrtc-common/utilities/ActionCreator";

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
  dispatch(ActionCreator.createAction(SET_CALL_TYPE, { type }));
  if (['video', 'audio'].indexOf(type) >= 0) {
    dispatch(setState('call-initializing'));
  } else {
    dispatch(setState('chat-initializing'));
  }
};

export const rejectedCall = () => dispatch => {
    dispatch(ActionCreator.createAction(END_CALL));
    dispatch(setVisible(false));
    dispatch(setState('init'));
};

export const endCall = () => (dispatch) => {
    dispatch(ActionCreator.createAction(END_CALL));
    dispatch(setState('rate'));
};

export const breakCall = () => dispatch => {
    dispatch(ActionCreator.createAction(END_CALL));
    dispatch(setVisible(false));
    dispatch(setState('init'));
};

export const setInitializingCall = initializing => ActionCreator.createAction(SET_INITIALIZING_CALL, { initializing });
export const setConnecting = connecting => ActionCreator.createAction(SET_CONNECTING, { connecting });
export const setVolume = volume => ActionCreator.createAction(SET_VOLUME, { volume });
export const setWrittenMessage = writtenMessage => ActionCreator.createAction(SET_WRITTEN_MESSAGE, { writtenMessage });
export const setMuteAudio = muted => ActionCreator.createAction(SET_MUTE_AUDIO, { muted });
export const setMuteVideo = muted => ActionCreator.createAction(SET_MUTE_VIDEO, { muted });
export const resetCall = () => ActionCreator.createAction(RESET_CALL);

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
