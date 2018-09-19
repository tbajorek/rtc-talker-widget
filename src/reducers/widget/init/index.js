import { Map } from 'immutable';

import { SET_USERNAME, SET_AVATAR, SET_DEPARTMENT, SET_USERNAME_VALIDATION, SET_DEPARTMENT_VALIDATION } from '../../../actions/widget/init';
import { LOAD_CONFIG } from '../../../actions/config/index';
import getFromComplexObject from '../../../utilities/getFromComplexObject';

const defaultState = Map({
  givenUser: false,
  username: '',
  avatar: null,
  department: null,
  validation: Map({
    username: true,
    department: true,
  }),
});

const init = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return state.set('username', action.payload.username);
    case SET_AVATAR:
      return state.set('avatar', action.payload.avatar);
    case SET_DEPARTMENT:
      return state.set('department', action.payload.department);
    case SET_USERNAME_VALIDATION:
      return state.setIn(['validation', 'username'], action.payload.usernameValidation);
    case SET_DEPARTMENT_VALIDATION:
      return state.setIn(['validation', 'department'], action.payload.departmentValidation);
    case LOAD_CONFIG:
    {
      let newState = state;

      const name = getFromComplexObject(action.payload.config, ['user', 'name']);
      const surname = getFromComplexObject(action.payload.config, ['user', 'surname']);
      if (name !== null && surname !== null) {
        newState = newState.set('username', name+' '+surname).set('givenUser', true);
      }

      const avatar = getFromComplexObject(action.payload.config, ['user', 'avatar']);
      if (avatar !== null) {
        newState = newState.set('avatar', avatar);
      }

      const department = getFromComplexObject(action.payload.config, ['department']);
      if (department !== null) {
        newState = newState.set('department', department);
      }

      if (typeof action.payload.config.departments !== 'object' || !Object.keys(action.payload.config.departments).length) {
        newState = newState.set('department', 0);
      }

      return newState;
    }
    default:
      return state;
  }
};

export default init;

export const isGivenUser = state => state.widget.init.get('givenUser');
export const getUsername = state => state.widget.init.get('username');
export const getAvatar = state => state.widget.init.get('avatar');
export const getDepartment = state => state.widget.init.get('department');
export const getUsernameValidation = state => state.widget.init.get('validation').get('username');
export const getDepartmentValidation = state => state.widget.init.get('validation').get('department');
