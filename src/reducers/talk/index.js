import {FINISH_TALK, SET_ACTIVE_TALK, SET_SESSION_ID, SET_VIDEO} from "../../actions/talk";
import {END_CALL, SET_INITIALIZING_CALL} from "../../actions/widget/call";

const defaultState = {
    sessionId: null,
    video: {
        local: null,
        remote: null
    },
    finishing: false,
    activeTalk: false,
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
            if(!action.payload.initialized) {
                return {...state, finished: true};
            }
            break;
        case SET_ACTIVE_TALK:
            return {...state, activeTalk: action.payload.activeTalk};
        case FINISH_TALK:
            return {...state, finishing: true};
        case END_CALL:
            return defaultState;
    }
    return state;
};

export default talk;

export const getSessionId = state => state.talk.sessionId;
export const getLocalVideo = state => state.talk.video.local;
export const getRemoteVideo = state => state.talk.video.remote;
export const isFinishing = state => state.talk.finishing;
export const isActiveTalk = state => state.talk.activeTalk;