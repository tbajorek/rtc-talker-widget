import { assert } from 'chai';
import createTestStore from '../createTestStore';

import reducer from '../../src/reducers/availability';
import * as availabilityActions from '../../src/actions/availability';

describe('reducers > availability', () => {
    const initialState = {departments: [], users: [], channels: [], talkId: null};

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle CHECK_DEPARTMENTS_SUCCESS action', () => {
        const store = createTestStore(reducer, initialState);
        const departments = [
            {id: 1, name: 'Test1'},
            {id: 2, name: 'Test2'}
        ];

        store.dispatch(availabilityActions.checkDepartmentsSuccess({departments}));
        assert.deepEqual(store.getState(), {...initialState, departments});
    });

    it('should handle CLEAR_USERS_LIST action', () => {
        const users = [
            {id: 1, name: 'Test1'},
            {id: 2, name: 'Test2'}
        ];
        const returnedState = reducer({...initialState, users}, availabilityActions.clearUsersList());
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle CHECK_USERS_SUCCESS action', () => {
        const store = createTestStore(reducer, initialState);
        const users = [
            {id: 1, name: 'Test1'},
            {id: 2, name: 'Test2'}
        ];

        store.dispatch(availabilityActions.checkUsersSuccess({users}));
        assert.deepEqual(store.getState(), {...initialState, users});
    });

    it('should handle SET_AVAILABLE_CHANNELS action', () => {
        const channels = [
            {id: 1, name: 'Test1'},
            {id: 2, name: 'Test2'}
        ];
        const returnedState = reducer(initialState, availabilityActions.setAvailableChannels(channels));
        assert.deepEqual(returnedState, {...initialState, channels});
    });

    it('should handle CHOOSE_USER_SUCCESS action', () => {
        const store = createTestStore(reducer, initialState);
        const user = {id: 1, name: 'Test1'};
        const talkId = '15as4';

        store.dispatch(availabilityActions.chooseUserSuccess({user, talkId}));
        assert.deepEqual(store.getState(), {...initialState, talkId});
    });
});