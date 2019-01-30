import { assert } from 'chai';
import { OrderedSet, Map } from 'immutable';

import reducer from '../../src/reducers/messages';
import * as messageActions from '../../src/actions/message';
import ActionCreator from "tbrtc-common/utilities/ActionCreator";

describe('reducers > messages', () => {
    const initialState = {
        list: OrderedSet(),
        visibility: false,
        unreadMessages: 0
    };

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle ADD_MESSAGE_TO_LIST action', () => {
        const authorId = 1;
        const content = 'content';
        const date = 'date';
        const returnedState = reducer(initialState, ActionCreator.createAction(messageActions.ADD_MESSAGE_TO_LIST, { authorId, content, date }));
        assert.deepEqual(returnedState, {
            ...initialState,
            list: initialState.list.add(Map({authorId, content, date}))
        });
    });

    it('should handle SET_MESSAGES_VISIBILITY action', () => {
        const messagesVisibility = true;
        const returnedState = reducer(initialState, ActionCreator.createAction(messageActions.SET_MESSAGES_VISIBILITY, { messagesVisibility }));
        assert.deepEqual(returnedState, {
            ...initialState,
            visibility: messagesVisibility
        });
    });

    it('should handle INCREASE_UNREAD_MESSAGES action when visible', () => {
        const returnedState = reducer(initialState, messageActions.increaseUnreadMessages());
        assert.deepEqual(returnedState, {
            ...initialState,
            unreadMessages: initialState.unreadMessages+1
        });
    });

    it('should handle INCREASE_UNREAD_MESSAGES action when invisible', () => {
        const returnedState = reducer({...initialState, visibility: true}, messageActions.increaseUnreadMessages());
        assert.deepEqual(returnedState, {...initialState, visibility: true});
    });

    it('should handle RESET_UNREAD_MESSAGES action', () => {
        const returnedState = reducer(initialState, messageActions.resetUnreadMessages());
        assert.deepEqual(returnedState, {
            ...initialState,
            unreadMessages: 0
        });
    });

    it('should handle RESET_MESSAGES action', () => {
        const returnedState = reducer({
            ...initialState,
            unreadMessages: initialState.unreadMessages+10
        }, ActionCreator.createAction(messageActions.RESET_MESSAGES));
        assert.deepEqual(returnedState, initialState);
    });
});