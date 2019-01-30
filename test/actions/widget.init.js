import { assert } from 'chai';

import * as initWidgetActions from '../../src/actions/widget/init';

describe('actions > widget > init', () => {
    describe('#setUsername()', () => {
        it('should create SET_USERNAME action', () => {
            const username = 'username';
            const action = initWidgetActions.setUsername(username);
            const actionObject = {
                type: initWidgetActions.SET_USERNAME,
                error: false,
                payload: {
                    username
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setAvatar()', () => {
        it('should create SET_AVATAR action', () => {
            const avatar = 'avatar';
            const action = initWidgetActions.setAvatar(avatar);
            const actionObject = {
                type: initWidgetActions.SET_AVATAR,
                error: false,
                payload: {
                    avatar
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setDepartment()', () => {
        it('should create SET_DEPARTMENT action', () => {
            const department = 'department';
            const action = initWidgetActions.setDepartment(department);
            const actionObject = {
                type: initWidgetActions.SET_DEPARTMENT,
                error: false,
                payload: {
                    department
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setUsernameValidation()', () => {
        it('should create SET_USERNAME_VALIDATION action', () => {
            const usernameValidation = true;
            const action = initWidgetActions.setUsernameValidation(usernameValidation);
            const actionObject = {
                type: initWidgetActions.SET_USERNAME_VALIDATION,
                error: false,
                payload: {
                    usernameValidation
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setDepartmentValidation()', () => {
        it('should create SET_DEPARTMENT_VALIDATION action', () => {
            const departmentValidation = true;
            const action = initWidgetActions.setDepartmentValidation(departmentValidation);
            const actionObject = {
                type: initWidgetActions.SET_DEPARTMENT_VALIDATION,
                error: false,
                payload: {
                    departmentValidation
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });
});