import ActionCreator from "tbrtc-common/utilities/ActionCreator";
import {endCall} from "../widget/call";
import {showIndicator} from "../widget/button";

export const SET_SESSION_ID = 'SET_SESSION_ID';
export const SET_VIDEO = 'SET_VIDEO';
export const SET_FILE_INPUT = 'SET_FILE_INPUT';
export const START_SELECTING_FILES = 'START_SELECTING_FILES';
export const SET_ACTIVE_TALK = 'SET_ACTIVE_TALK';
export const FINISH_TALK = 'FINISH_TALK';
export const BREAK_REQUEST = 'BREAK_REQUEST';
export const SET_BROKEN_TALK = 'SET_BROKEN_TALK';

export const setSessionId = sessionId => ActionCreator.createAction(SET_SESSION_ID, { sessionId });
export const setVideo = (type, element) => ActionCreator.createAction(SET_VIDEO, { type, element });
export const setFileInput = (fileInput) => ActionCreator.createAction(SET_FILE_INPUT, { fileInput });
export const startSelectingFiles = (fileId) => ActionCreator.createAction(START_SELECTING_FILES, { fileId });
export const setActiveTalk = (activeTalk) => ActionCreator.createAction(SET_ACTIVE_TALK, { activeTalk });
export const finishTalk = (connecting) => (dispatch) => {
    if(connecting) {//przerwane łączenie
        dispatch(breakRequest());
        dispatch(ActionCreator.createAction(FINISH_TALK));
        dispatch(endCall());
    } else {//rozmowa już trwa
        dispatch(ActionCreator.createAction(FINISH_TALK));
    }
    dispatch(showIndicator(false));
};
export const breakRequest = () => ActionCreator.createAction(BREAK_REQUEST);
export const setBrokenTalk = () => ActionCreator.createAction(SET_BROKEN_TALK);