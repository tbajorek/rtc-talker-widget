import { assert } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as messageActions from '../../src/actions/message';
import * as callWidgetActions from '../../src/actions/widget/call';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > message', () => {
    describe('#addMessageToList()', () => {
        it('should create ADD_MESSAGE_TO_LIST action', () => {
            const store = mockStore({});
            const authorId = 'authorId';
            const content = 'content';
            const date = 'date';

            const expectedActions = [
                {
                    type: messageActions.ADD_MESSAGE_TO_LIST,
                    error: false,
                    payload: {
                        authorId, content, date
                    }
                }, {
                    type: messageActions.INCREASE_UNREAD_MESSAGES,
                    error: false,
                    payload: {}
                }
            ];

            store.dispatch(messageActions.addMessageToList(authorId, content, date));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#setMessagesVisibility()', () => {
        it('should create SET_MESSAGES_VISIBILITY action', () => {
            const store = mockStore({});
            const messagesVisibility = true;

            const expectedActions = [
                {
                    type: messageActions.SET_MESSAGES_VISIBILITY,
                    error: false,
                    payload: {
                        messagesVisibility
                    }
                }, {
                    type: messageActions.RESET_UNREAD_MESSAGES,
                    error: false,
                    payload: {}
                }
            ];

            store.dispatch(messageActions.setMessagesVisibility(messagesVisibility));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#sendMessage()', () => {
        it('should send non-empty message', () => {
            const store = mockStore({});
            const content = 'content';

            const expectedActions = [
                {
                    type: messageActions.SEND_MESSAGE,
                    error: false,
                    payload: {
                        content
                    }
                }, {
                    type: callWidgetActions.SET_WRITTEN_MESSAGE,
                    error: false,
                    payload: {
                        writtenMessage: ''
                    }
                }
            ];

            store.dispatch(messageActions.sendMessage(1, content));
            assert.deepEqual(store.getActions(), expectedActions);
        });

        it('should not send empty message', () => {
            const store = mockStore({});
            const content = '';

            const expectedActions = [
                {
                    type: callWidgetActions.SET_WRITTEN_MESSAGE,
                    error: false,
                    payload: {
                        writtenMessage: ''
                    }
                }
            ];

            store.dispatch(messageActions.sendMessage(1, content));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#resetMessages()', () => {
        it('should create SET_MESSAGES_VISIBILITY action', () => {
            const store = mockStore({});
            const expectedActions = [
                {
                    type: messageActions.RESET_MESSAGES,
                    error: false,
                    payload: {}
                }, {
                    type: messageActions.RESET_UNREAD_MESSAGES,
                    error: false,
                    payload: {}
                }
            ];

            store.dispatch(messageActions.resetMessages());
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#increaseUnreadMessages()', () => {
        it('should create CHECK_DEPARTMENTS_REQUEST action', () => {
            const action = messageActions.increaseUnreadMessages();
            const actionObject = {
                type: messageActions.INCREASE_UNREAD_MESSAGES,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#resetUnreadMessages()', () => {
        it('should create RESET_UNREAD_MESSAGES action', () => {
            const action = messageActions.resetUnreadMessages();
            const actionObject = {
                type: messageActions.RESET_UNREAD_MESSAGES,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });
});