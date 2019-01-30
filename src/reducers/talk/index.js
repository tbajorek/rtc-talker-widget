import {
    FINISH_TALK,
    SET_ACTIVE_TALK,
    SET_BROKEN_TALK,
    SET_FILE_INPUT,
    SET_SESSION_ID,
    SET_VIDEO
} from "../../actions/talk";
import {END_CALL, SET_INITIALIZING_CALL} from "../../actions/widget/call";

const defaultState = {
    sessionId: null,
    video: {
        local: null,
        remote: null
    },
    finishing: false,
    activeTalk: false,
    fileInput: null,
    brokenTalk: false
};

const talk = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SESSION_ID:
            return {...state, sessionId: action.payload.sessionId};
        case SET_VIDEO:
            const newVideo = {...state.video};
            newVideo[action.payload.type] = action.payload.element;
            return {...state, video: newVideo};
        case SET_INITIALIZING_CALL:
            if(!action.payload.initializing) {
                return {...state, finishing: false};
            }
            break;
        case SET_ACTIVE_TALK:
            return {...state, activeTalk: action.payload.activeTalk, brokenTalk: defaultState.brokenTalk};
        case FINISH_TALK:
            return {...state, finishing: true};
        case END_CALL:
            return {...defaultState, brokenTalk: state.brokenTalk};
        case SET_FILE_INPUT:
            return {
                ...state,
                fileInput: action.payload.fileInput
            };
        case SET_BROKEN_TALK:
            return {
                ...state,
                brokenTalk: true
            };
    }
    return state;
};

export default talk;

export const getSessionId = state => state.talk.sessionId;
export const getLocalVideo = state => state.talk.video.local;
export const getRemoteVideo = state => state.talk.video.remote;
export const isFinishing = state => state.talk.finishing;
export const isActiveTalk = state => state.talk.activeTalk;
export const hasFileInput = state => state.talk.fileInput !== null;
export const isBrokenTalk = state => state.talk.brokenTalk;