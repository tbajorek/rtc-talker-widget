import { createAction } from 'redux-actions';
import {setState, setVisible} from "../widget";
import {endCall} from "../widget/call";

export const SET_SESSION_ID = 'SET_SESSION_ID';
export const SET_VIDEO = 'SET_VIDEO';
export const SET_FILE_INPUT = 'SET_FILE_INPUT';
export const START_SELECTING_FILES = 'START_SELECTING_FILES';
export const SET_ACTIVE_TALK = 'SET_ACTIVE_TALK';
export const FINISH_TALK = 'FINISH_TALK';
export const BREAK_REQUEST = 'BREAK_REQUEST';

export const setSessionId = sessionId => createAction(SET_SESSION_ID)({ sessionId });
export const setVideo = (type, element) => createAction(SET_VIDEO)({ type, element });
export const setFileInput = (fileInput) => createAction(SET_FILE_INPUT)({ fileInput });
export const startSelectingFiles = (fileId) => createAction(START_SELECTING_FILES)({ fileId });
export const setActiveTalk = (activeTalk) => createAction(SET_ACTIVE_TALK)({ activeTalk });
export const finishTalk = (activeTalk) => (dispatch) => {
    if(activeTalk) {
        dispatch(createAction(FINISH_TALK)(null));
    } else {
        dispatch(breakRequest());
    }
};
export const breakRequest = () => createAction(BREAK_REQUEST)(null);