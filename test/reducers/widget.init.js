import { assert } from 'chai';
import { Map } from 'immutable';

import reducer from '../../src/reducers/widget/init';
import * as initWidgetActions from '../../src/actions/widget/init';
import * as configActions from "../../src/actions/config";

describe('reducers > widget > call', () => {
    const initialState = Map({
        givenUser: false,
        username: '',
        avatar: null,
        department: null,
        validation: Map({
            username: true,
            department: true,
        }),
    });

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_USERNAME action', () => {
        const username = 'username';
        const returnedState = reducer(initialState, initWidgetActions.setUsername(username));
        assert.deepEqual(returnedState, initialState.set('username', username));
    });

    it('should handle SET_AVATAR action', () => {
        const avatar = 'avatar';
        const returnedState = reducer(initialState, initWidgetActions.setAvatar(avatar));
        assert.deepEqual(returnedState, initialState.set('avatar', avatar));
    });

    it('should handle SET_DEPARTMENT action', () => {
        const department = {id: 1, name: 'Test1'};
        const returnedState = reducer(initialState, initWidgetActions.setDepartment(department));
        assert.deepEqual(returnedState, initialState.set('department', department));
    });

    it('should handle SET_USERNAME_VALIDATION action', () => {
        const usernameValidation = false;
        const returnedState = reducer(initialState, initWidgetActions.setUsernameValidation(usernameValidation));
        assert.deepEqual(returnedState, initialState.setIn(['validation', 'username'], usernameValidation));
    });

    it('should handle SET_DEPARTMENT_VALIDATION action', () => {
        const departmentValidation = false;
        const returnedState = reducer(initialState, initWidgetActions.setDepartmentValidation(departmentValidation));
        assert.deepEqual(returnedState, initialState.setIn(['validation', 'department'], departmentValidation));
    });

    it('should load data from config', () => {
        const config = {
            user: {
                name: 'name',
                surname: 'surname',
                avatar: 'avatar'
            }, department: {
                id: 1, name: 'Test'
            }
        };
        const returnedState = reducer(initialState, configActions.loadConfig(config));
        assert.deepEqual(returnedState, initialState
            .set('username', config.user.name + ' ' + config.user.surname)
            .set('givenUser', true)
            .set('avatar', config.user.avatar)
            .set('department', config.department)
        );
    });
});