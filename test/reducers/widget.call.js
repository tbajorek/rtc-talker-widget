import { assert } from 'chai';
import { Map } from 'immutable';
import createTestStore from "../createTestStore";

import reducer from '../../src/reducers/widget/call';
import * as callWidgetActions from '../../src/actions/widget/call';

describe('reducers > widget > call', () => {
    const initialState = Map({
        type: null,
        connecting: false,
        volume: 50,
        writtenMessage: '',
        muted: Map({
            audio: false,
            video: false,
        }),
    });

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_INITIALIZING_CALL action', () => {
        const initializing = true;
        const returnedState = reducer(initialState, callWidgetActions.setInitializingCall(initializing));
        assert.deepEqual(returnedState, initialState.set('initializing', initializing));
    });

    it('should handle SET_CALL_TYPE action', () => {
        const store = createTestStore(reducer, initialState);
        const type = 'video';

        store.dispatch(callWidgetActions.setCallType(type));
        assert.deepEqual(store.getState(), initialState.set('type', type));
    });

    it('should handle SET_CONNECTING action', () => {
        const connecting = true;
        const returnedState = reducer(initialState, callWidgetActions.setConnecting(connecting));
        assert.deepEqual(returnedState, initialState.set('connecting', connecting));
    });

    it('should handle SET_VOLUME action', () => {
        const volume = 20;
        const returnedState = reducer(initialState, callWidgetActions.setVolume(volume));
        assert.deepEqual(returnedState, initialState.set('volume', volume));
    });

    it('should handle SET_WRITTEN_MESSAGE action', () => {
        const writtenMessage = 'writtenMessage';
        const returnedState = reducer(initialState, callWidgetActions.setWrittenMessage(writtenMessage));
        assert.deepEqual(returnedState, initialState.set('writtenMessage', writtenMessage));
    });

    it('should handle SET_MUTE_AUDIO action', () => {
        const muted = true;
        const returnedState = reducer(initialState, callWidgetActions.setMuteAudio(muted));
        assert.deepEqual(returnedState, initialState.setIn(['muted', 'audio'], muted));
    });

    it('should handle SET_MUTE_VIDEO action', () => {
        const muted = true;
        const returnedState = reducer(initialState, callWidgetActions.setMuteVideo(muted));
        assert.deepEqual(returnedState, initialState.setIn(['muted', 'video'], muted));
    });

    it('should handle RESET_CALL action', () => {
        const returnedState = reducer(initialState, callWidgetActions.resetCall());
        assert.deepEqual(returnedState,
            initialState.setIn(['muted', 'video'], false)
            .setIn(['muted', 'audio'], false)
            .set('volume', 50)
            .set('writtenMessage', '')
        );
    });
});