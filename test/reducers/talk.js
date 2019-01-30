import { assert } from 'chai';

import reducer from '../../src/reducers/talk';
import * as talkActions from '../../src/actions/talk';
import * as callWidgetActions from '../../src/actions/widget/call';
import ActionCreator from "tbrtc-common/utilities/ActionCreator";

describe('reducers > talk', () => {
    const initialState = {
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

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_SESSION_ID action', () => {
        const sessionId = 'sessionId';
        const returnedState = reducer(initialState, talkActions.setSessionId(sessionId));
        assert.deepEqual(returnedState, {
            ...initialState,
            sessionId
        });
    });

    it('should set local video', () => {
        const type = 'local';
        const element = {a: 1, b: 2};
        const returnedState = reducer(initialState, talkActions.setVideo(type, element));
        assert.deepEqual(returnedState, {...initialState, video: {...initialState.video, local: element}});
    });

    it('should set remote video', () => {
        const type = 'remote';
        const element = {a: 1, b: 2};
        const returnedState = reducer(initialState, talkActions.setVideo(type, element));
        assert.deepEqual(returnedState, {...initialState, video: {...initialState.video, remote: element}});
    });

    it('should handle SET_INITIALIZING_CALL action with true initialising', () => {
        const initializing = true;
        const returnedState = reducer(initialState, callWidgetActions.setInitializingCall(initializing));
        assert.deepEqual(returnedState, {...initialState, finishing: false});
    });

    it('should handle SET_INITIALIZING_CALL action with false initialising', () => {
        const initializing = false;
        const returnedState = reducer(initialState, callWidgetActions.setInitializingCall(initializing));
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_ACTIVE_TALK action', () => {
        const activeTalk = true;
        const returnedState = reducer({...initialState, brokenTalk: true}, talkActions.setActiveTalk(activeTalk));
        assert.deepEqual(returnedState, {
            ...initialState,
            activeTalk
        });
    });

    it('should handle FINISH_TALK action', () => {
        const returnedState = reducer(initialState, ActionCreator.createAction(talkActions.FINISH_TALK));
        assert.deepEqual(returnedState, {
            ...initialState,
            finishing: true
        });
    });

    it('should handle END_CALL action', () => {
        const returnedState = reducer({...initialState, finishing: !initialState.finishing, brokenTalk: true}, ActionCreator.createAction(callWidgetActions.END_CALL));
        assert.deepEqual(returnedState, {
            ...initialState,
            brokenTalk: true
        });
    });

    it('should handle SET_FILE_INPUT action', () => {
        const fileInput = {a: 1, b: 2};
        const returnedState = reducer(initialState, talkActions.setFileInput(fileInput));
        assert.deepEqual(returnedState, {
            ...initialState,
            fileInput
        });
    });

    it('should handle SET_BROKEN_TALK action', () => {
        const brokenTalk = !initialState.brokenTalk;
        const returnedState = reducer(initialState, talkActions.setBrokenTalk());
        assert.deepEqual(returnedState, {
            ...initialState,
            brokenTalk
        });
    });
});