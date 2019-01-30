import { assert } from 'chai';

import reducer from '../../src/reducers/users';
import * as usersActions from '../../src/actions/users';
import * as configActions from '../../src/actions/config';
import * as availabilityActions from '../../src/actions/availability';
import createTestStore from "../createTestStore";

describe('reducers > users', () => {
    const initialState = {
        user: null,
        receiver: null
    };

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_USER action', () => {
        const user = {a: 1, b: 2};
        const returnedState = reducer(initialState, usersActions.setUser(user));
        assert.deepEqual(returnedState, {
            ...initialState,
            user
        });
    });

    it('should handle SET_USER_ID action', () => {
        const userId = 'userId';
        const user = {a: 1, b: 2};
        const returnedState = reducer({...initialState, user}, usersActions.setUserId(userId));
        assert.deepEqual(returnedState, {
            ...initialState,
            user: {...user, id: userId}
        });
    });

    it('should handle SET_RECEIVER action', () => {
        const receiver = {name: 'John', surname: 'Black'};
        const returnedState = reducer(initialState, usersActions.setReceiver(receiver));
        assert.deepEqual(returnedState, {
            ...initialState,
            receiver
        });
    });

    it('should handle CHOOSE_USER_SUCCESS action', () => {
        const store = createTestStore(reducer, initialState);
        const user = {id: 1, name: 'Test1'};
        const talkId = '15as4';

        store.dispatch(availabilityActions.chooseUserSuccess({user, talkId}));
        assert.deepEqual(store.getState(), {...initialState, receiver: user});
    });

    it('should handle RESET_USERS action', () => {
        const userData = {a: 1, b: 2};
        const returnedState = reducer({user: userData, receiver: userData}, usersActions.resetUsers());
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle LOAD_CONFIG action', () => {
        const user = {a: 1, b: 2};
        const returnedState = reducer(initialState, configActions.loadConfig({
            a: 1, id: 'text', user
        }));
        assert.deepEqual(returnedState, {...initialState, user});
    });
});