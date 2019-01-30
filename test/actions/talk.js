import { assert } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as talkActions from '../../src/actions/talk';
import * as callWidgetActions from '../../src/actions/widget/call';
import * as buttonWidgetActions from '../../src/actions/widget/button';
import * as widgetActions from '../../src/actions/widget';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > talk', () => {
    describe('#setSessionId()', () => {
        it('should create SET_SESSION_ID action', () => {
            const sessionId = 1;
            const action = talkActions.setSessionId(sessionId);
            const actionObject = {
                type: talkActions.SET_SESSION_ID,
                error: false,
                payload: {
                    sessionId
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setVideo()', () => {
        it('should create SET_VIDEO action', () => {
            const type = 'video';
            const element = 'text';
            const action = talkActions.setVideo(type, element);
            const actionObject = {
                type: talkActions.SET_VIDEO,
                error: false,
                payload: {
                    type, element
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setFileInput()', () => {
        it('should create SET_FILE_INPUT action', () => {
            const fileInput = {name: 'test'};
            const action = talkActions.setFileInput(fileInput);
            const actionObject = {
                type: talkActions.SET_FILE_INPUT,
                error: false,
                payload: {
                    fileInput
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#startSelectingFiles()', () => {
        it('should create START_SELECTING_FILES action', () => {
            const fileId = 'as5ds';
            const action = talkActions.startSelectingFiles(fileId);
            const actionObject = {
                type: talkActions.START_SELECTING_FILES,
                error: false,
                payload: {
                    fileId
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setActiveTalk()', () => {
        it('should create SET_ACTIVE_TALK action', () => {
            const activeTalk = 14;
            const action = talkActions.setActiveTalk(activeTalk);
            const actionObject = {
                type: talkActions.SET_ACTIVE_TALK,
                error: false,
                payload: {
                    activeTalk
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#finishTalk()', () => {
        it('should finish when is connecting', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: talkActions.BREAK_REQUEST,
                    error: false,
                    payload: {}
                }, {
                    type: talkActions.FINISH_TALK,
                    error: false,
                    payload: {}
                }, {
                    type: callWidgetActions.END_CALL,
                    error: false,
                    payload: {}
                }, {
                    type: widgetActions.SET_STATE,
                    error: false,
                    payload: {
                        state: 'rate'
                    }
                }, {
                    type: buttonWidgetActions.SHOW_INDICATOR,
                    error: false,
                    payload: {
                        showIndicator: false
                    }
                }
            ];

            store.dispatch(talkActions.finishTalk(true));
            assert.deepEqual(store.getActions(), expectedActions);
        });

        it('should finish when talk is active', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: talkActions.FINISH_TALK,
                    error: false,
                    payload: {}
                }, {
                    type: buttonWidgetActions.SHOW_INDICATOR,
                    error: false,
                    payload: {
                        showIndicator: false
                    }
                }
            ];

            store.dispatch(talkActions.finishTalk(false));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#breakRequest()', () => {
        it('should create BREAK_REQUEST action', () => {
            const action = talkActions.breakRequest();
            const actionObject = {
                type: talkActions.BREAK_REQUEST,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setBrokenTalk()', () => {
        it('should create SET_BROKEN_TALK action', () => {
            const action = talkActions.setBrokenTalk();
            const actionObject = {
                type: talkActions.SET_BROKEN_TALK,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });
});