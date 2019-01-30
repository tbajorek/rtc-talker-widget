import { assert } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import _setInitStateActions from './_setInitStateActions';
import * as callWidgetActions from '../../src/actions/widget/call';
import * as widgetActions from "../../src/actions/widget";
import * as buttonWidgetActions from "../../src/actions/widget/button";
import * as initWidgetActions from "../../src/actions/widget/init";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > widget > call', () => {
    describe('#setCallType()', () => {
        it('should set correctly media call type', () => {
            const store = mockStore({});
            const type = 'audio';

            const expectedActions = [
                {
                    type: callWidgetActions.SET_CALL_TYPE,
                    error: false,
                    payload: {
                        type
                    }
                }, {
                    type: widgetActions.SET_STATE,
                    error: false,
                    payload: {
                        state: 'call-initializing'
                    }
                }
            ];

            store.dispatch(callWidgetActions.setCallType(type));
            assert.deepEqual(store.getActions(), expectedActions);
        });

        it('should set correctly chat call type', () => {
            const store = mockStore({});
            const type = 'chat';

            const expectedActions = [
                {
                    type: callWidgetActions.SET_CALL_TYPE,
                    error: false,
                    payload: {
                        type
                    }
                }, {
                    type: widgetActions.SET_STATE,
                    error: false,
                    payload: {
                        state: 'chat-initializing'
                    }
                }
            ];

            store.dispatch(callWidgetActions.setCallType(type));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#rejectedCall()', () => {
        it('should reject a call', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: callWidgetActions.END_CALL,
                    error: false,
                    payload: {}
                }, {
                    type: widgetActions.SET_VISIBLE,
                    error: false,
                    payload: {
                        visible: false
                    }
                }, {
                    type: buttonWidgetActions.SHOW_INDICATOR,
                    error: false,
                    payload: {
                        showIndicator: true
                    }
                }
            ].concat(_setInitStateActions);

            store.dispatch(callWidgetActions.rejectedCall());
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#endCall()', () => {
        it('should end a call', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: callWidgetActions.END_CALL,
                    error: false,
                    payload: {}
                }, {
                    type: widgetActions.SET_STATE,
                    error: false,
                    payload: {
                        state: "rate"
                    }
                }
            ];

            store.dispatch(callWidgetActions.endCall());
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#breakCall()', () => {
        it('should break a call', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: callWidgetActions.END_CALL,
                    error: false,
                    payload: {}
                }, {
                    type: widgetActions.SET_VISIBLE,
                    error: false,
                    payload: {
                        visible: false
                    }
                }, {
                    type: buttonWidgetActions.SHOW_INDICATOR,
                    error: false,
                    payload: {
                        showIndicator: true
                    }
                }
            ].concat(_setInitStateActions);

            store.dispatch(callWidgetActions.breakCall());
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#setInitializingCall()', () => {
        it('should create SET_INITIALIZING_CALL action', () => {
            const initializing = true;
            const action = callWidgetActions.setInitializingCall(initializing);
            const actionObject = {
                type: callWidgetActions.SET_INITIALIZING_CALL,
                error: false,
                payload: {
                    initializing
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setConnecting()', () => {
        it('should create SET_CONNECTING action', () => {
            const connecting = true;
            const action = callWidgetActions.setConnecting(connecting);
            const actionObject = {
                type: callWidgetActions.SET_CONNECTING,
                error: false,
                payload: {
                    connecting
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setVolume()', () => {
        it('should create SET_VOLUME action', () => {
            const volume = true;
            const action = callWidgetActions.setVolume(volume);
            const actionObject = {
                type: callWidgetActions.SET_VOLUME,
                error: false,
                payload: {
                    volume
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setWrittenMessage()', () => {
        it('should create SET_WRITTEN_MESSAGE action', () => {
            const writtenMessage = 'writtenMessage';
            const action = callWidgetActions.setWrittenMessage(writtenMessage);
            const actionObject = {
                type: callWidgetActions.SET_WRITTEN_MESSAGE,
                error: false,
                payload: {
                    writtenMessage
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setMuteAudio()', () => {
        it('should create SET_MUTE_AUDIO action', () => {
            const muted = true;
            const action = callWidgetActions.setMuteAudio(muted);
            const actionObject = {
                type: callWidgetActions.SET_MUTE_AUDIO,
                error: false,
                payload: {
                    muted
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setMuteVideo()', () => {
        it('should create SET_MUTE_VIDEO action', () => {
            const muted = true;
            const action = callWidgetActions.setMuteVideo(muted);
            const actionObject = {
                type: callWidgetActions.SET_MUTE_VIDEO,
                error: false,
                payload: {
                    muted
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#resetCall()', () => {
        it('should create RESET_CALL action', () => {
            const action = callWidgetActions.resetCall();
            const actionObject = {
                type: callWidgetActions.RESET_CALL,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });
    describe('#startCall()', () => {
        it('should start a call when data is correct', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: initWidgetActions.SET_USERNAME_VALIDATION,
                    error: false,
                    payload: {
                        usernameValidation: true
                    }
                }, {
                    type: initWidgetActions.SET_DEPARTMENT_VALIDATION,
                    error: false,
                    payload: {
                        departmentValidation: true
                    }
                }, {
                    type: callWidgetActions.SET_CALL_TYPE,
                    error: false,
                    payload: {
                        type: 'video'
                    }
                }, {
                    type: widgetActions.SET_STATE,
                    error: false,
                    payload: {
                        state: 'call-initializing'
                    }
                }, {
                    type: callWidgetActions.SET_INITIALIZING_CALL,
                    error: false,
                    payload: {
                        initializing: true
                    }
                }
            ];

            store.dispatch(callWidgetActions.startCall('video', 'username', 5));
            assert.deepEqual(store.getActions(), expectedActions);
        });

        it('should not start a call when data is incorrect', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: initWidgetActions.SET_USERNAME_VALIDATION,
                    error: false,
                    payload: {
                        usernameValidation: false
                    }
                }, {
                    type: initWidgetActions.SET_DEPARTMENT_VALIDATION,
                    error: false,
                    payload: {
                        departmentValidation: true
                    }
                }
            ];

            store.dispatch(callWidgetActions.startCall('video', ' ', 5));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });
});