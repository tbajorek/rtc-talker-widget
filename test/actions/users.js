import { assert } from 'chai';

import * as usersActions from '../../src/actions/users';

describe('actions > users', () => {
    describe('#setUser()', () => {
        it('should create SET_USER action', () => {
            const user = {a: 1, b: 2};
            const action = usersActions.setUser(user);
            const actionObject = {
                type: usersActions.SET_USER,
                error: false,
                payload: {
                    user
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setUserId()', () => {
        it('should create SET_USER_ID action', () => {
            const userId = 'ytre65';
            const action = usersActions.setUserId(userId);
            const actionObject = {
                type: usersActions.SET_USER_ID,
                error: false,
                payload: {
                    userId
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setReceiver()', () => {
        it('should create SET_RECEIVER action', () => {
            const receiver = {a: 1, b: 2};
            const action = usersActions.setReceiver(receiver);
            const actionObject = {
                type: usersActions.SET_RECEIVER,
                error: false,
                payload: {
                    receiver
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#resetUsers()', () => {
        it('should create RESET_USERS action', () => {
            const action = usersActions.resetUsers();
            const actionObject = {
                type: usersActions.RESET_USERS,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });
});