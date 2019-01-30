import { assert } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as availabilityActions from '../../src/actions/availability';
import * as initWidgetActions from '../../src/actions/widget/init';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > availability', () => {
    describe('#checkDepartmentsRequest()', () => {
        it('should create CHECK_DEPARTMENTS_REQUEST action', () => {
            const payload = {a: 1, b: 2};
            const action = availabilityActions.checkDepartmentsRequest(payload);
            const actionObject = {
                type: availabilityActions.CHECK_DEPARTMENTS_REQUEST,
                error: false,
                payload
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#checkDepartmentsSuccess()', () => {
        it('should perform one department', () => {
            const store = mockStore({});
            const payload = {
                departments: [
                    {id: 1, 'name': 'Test1'}
                ]
            };

            const expectedActions = [
                {
                    type: availabilityActions.CHECK_DEPARTMENTS_SUCCESS,
                    error: false,
                    payload
                }, {
                    type: initWidgetActions.SET_DEPARTMENT,
                    error: false,
                    payload: {
                        department: payload.departments[0].id
                    }
                }
            ];

            store.dispatch(availabilityActions.checkDepartmentsSuccess(payload));
            assert.deepEqual(store.getActions(), expectedActions);
        });

        it('should perform many departments', () => {
            const store = mockStore({});
            const payload = {
                departments: [
                    {id: 1, 'name': 'Test1'},
                    {id: 2, 'name': 'Test2'},
                ]
            };

            const expectedActions = [
                {
                    type: availabilityActions.CHECK_DEPARTMENTS_SUCCESS,
                    error: false,
                    payload
                }
            ];

            store.dispatch(availabilityActions.checkDepartmentsSuccess(payload));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#checkDepartmentsFailure()', () => {
        it('should create CHECK_DEPARTMENTS_FAILURE action', () => {
            const payload = {message: 'ERROR'};
            const action = availabilityActions.checkDepartmentsFailure(payload);
            const actionObject = {
                type: availabilityActions.CHECK_DEPARTMENTS_FAILURE,
                error: true,
                payload: { message: payload.message, title: "Problem z pobraniem danych z serwera"}
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#checkUsersRequest()', () => {
        it('should create CHECK_USERS_REQUEST action', () => {
            const payload = {a: 1, b: 2};
            const action = availabilityActions.checkUsersRequest(payload);
            const actionObject = {
                type: availabilityActions.CHECK_USERS_REQUEST,
                error: false,
                payload
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#checkUsersSuccess()', () => {
        it('should create CHECK_USERS_SUCCESS action  ', () => {
            const store = mockStore({});
            const payload = {
                users: [
                    {id: 1, 'name': 'Test1'},
                    {id: 1, 'name': 'Test1'}
                ]
            };

            const expectedActions = [
                {
                    type: availabilityActions.CHECK_USERS_SUCCESS,
                    error: false,
                    payload
                }
            ];

            store.dispatch(availabilityActions.checkUsersSuccess(payload));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#checkUsersFailure()', () => {
        it('should create CHECK_USERS_FAILURE action', () => {
            const payload = {message: 'ERROR'};
            const action = availabilityActions.checkUsersFailure(payload);
            const actionObject = {
                type: availabilityActions.CHECK_USERS_FAILURE,
                error: true,
                payload: { message: payload.message, title: "Problem z pobraniem danych z serwera"}
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setAvailableChannels()', () => {
        it('should create SET_AVAILABLE_CHANNELS action', () => {
            const channels = [1,2];
            const action = availabilityActions.setAvailableChannels(channels);
            const actionObject = {
                type: availabilityActions.SET_AVAILABLE_CHANNELS,
                error: false,
                payload: {
                    channels
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#chooseUserRequest()', () => {
        it('should create CHOOSE_USER_REQUEST action', () => {
            const payload = {a: 1, b: 2};
            const action = availabilityActions.chooseUserRequest(payload);
            const actionObject = {
                type: availabilityActions.CHOOSE_USER_REQUEST,
                error: false,
                payload
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#chooseUserSuccess()', () => {
        it('should create CHOOSE_USER_SUCCESS action  ', () => {
            const store = mockStore({});
            const payload = {
                user: 'user', talkId: 'talkId'
            };

            const expectedActions = [
                {
                    type: availabilityActions.CHOOSE_USER_SUCCESS,
                    error: false,
                    payload
                }
            ];

            store.dispatch(availabilityActions.chooseUserSuccess(payload));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#chooseUserFailure()', () => {
        it('should create CHOOSE_USER_FAILURE action', () => {
            const payload = {message: 'ERROR'};
            const action = availabilityActions.chooseUserFailure(payload);
            const actionObject = {
                type: availabilityActions.CHOOSE_USER_FAILURE,
                error: true,
                payload: { message: payload.message, title: "Problem z pobraniem danych z serwera"}
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#clearUsersList()', () => {
        it('should create CLEAR_USERS_LIST action', () => {
            const action = availabilityActions.clearUsersList();
            const actionObject = {
                type: availabilityActions.CLEAR_USERS_LIST,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });
});
