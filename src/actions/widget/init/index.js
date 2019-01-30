import ActionCreator from "tbrtc-common/utilities/ActionCreator";

export const SET_USERNAME = 'SET_USERNAME';
export const SET_AVATAR = 'SET_AVATAR';
export const SET_DEPARTMENT = 'SET_DEPARTMENT';
export const SET_USERNAME_VALIDATION = 'SET_USERNAME_VALIDATION';
export const SET_DEPARTMENT_VALIDATION = 'SET_DEPARTMENT_VALIDATION';

export const setUsername = username => ActionCreator.createAction(SET_USERNAME, { username });
export const setAvatar = avatar => ActionCreator.createAction(SET_AVATAR, { avatar });
export const setDepartment = department => ActionCreator.createAction(SET_DEPARTMENT, { department });
export const setUsernameValidation = usernameValidation => ActionCreator.createAction(SET_USERNAME_VALIDATION, { usernameValidation });
export const setDepartmentValidation = departmentValidation => ActionCreator.createAction(SET_DEPARTMENT_VALIDATION, { departmentValidation });
