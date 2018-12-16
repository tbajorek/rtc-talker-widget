import Requester from "tbrtc-common/utilities/Requester";
import ActionCreator from "tbrtc-common/utilities/ActionCreator";
import {setDepartment} from "../widget/init";

export const CHECK_DEPARTMENTS_REQUEST = 'CHECK_DEPARTMENTS_REQUEST';
export const CHECK_DEPARTMENTS_SUCCESS = 'CHECK_DEPARTMENTS_SUCCESS';
export const CHECK_DEPARTMENTS_FAILURE = 'CHECK_DEPARTMENTS_FAILURE';

export const CLEAR_USERS_LIST = 'CLEAR_USERS_LIST';
export const CHECK_USERS_REQUEST = 'CHECK_USERS_REQUEST';
export const CHECK_USERS_SUCCESS = 'CHECK_USERS_SUCCESS';
export const CHECK_USERS_FAILURE = 'CHECK_USERS_FAILURE';
export const SET_AVAILABLE_CHANNELS = 'SET_AVAILABLE_CHANNELS';

export const CHOOSE_USER_REQUEST = 'CHOOSE_USER_REQUEST';
export const CHOOSE_USER_SUCCESS = 'CHOOSE_USER_SUCCESS';
export const CHOOSE_USER_FAILURE = 'CHOOSE_USER_FAILURE';

export const checkDepartmentsRequest = (payload) => {
    return ActionCreator.createAction(CHECK_DEPARTMENTS_REQUEST, { ...payload });
};

export const checkDepartmentsSuccess = (data) => {
    return (dispatch) => {
        const { departments } = data;
        dispatch(ActionCreator.createAction(CHECK_DEPARTMENTS_SUCCESS, { departments }));
        if(departments.length === 1) {
            dispatch(setDepartment(departments[0].id))
        }
    }
};

export const checkDepartmentsFailure = (data) => {
    return ActionCreator.createErrorAction(CHECK_DEPARTMENTS_FAILURE, { message: data.message, title: "Problem z pobraniem danych z serwera" });
};

export const checkDepartments = (companyId) => (dispatch, getState) => {
    return Requester.get('/options/'+companyId, 200, {
        request: checkDepartmentsRequest,
        success: checkDepartmentsSuccess,
        error: checkDepartmentsFailure
    })(dispatch);
};

export const checkUsersRequest = (payload) => {
    return ActionCreator.createAction(CHECK_USERS_REQUEST, { ...payload });
};

export const checkUsersSuccess = (data) => {
    const { users } = data;
    return (dispatch) => {
        dispatch(ActionCreator.createAction(CHECK_USERS_SUCCESS, { users }));
    }
};

export const checkUsersFailure = (data) => {
    return ActionCreator.createErrorAction(CHECK_USERS_FAILURE, { message: data.message, title: "Problem z pobraniem danych z serwera" });
};

export const checkRemoteUsers = (companyId, departmentId) => (dispatch, getState) => {
    return Requester.get('/options/'+companyId+'/departments/'+departmentId, 200, {
        request: checkUsersRequest,
        success: checkUsersSuccess,
        error: checkUsersFailure
    })(dispatch);
};

export const setAvailableChannels = (channels) => {
    return ActionCreator.createAction(SET_AVAILABLE_CHANNELS, { channels });
};

export const chooseUserRequest = (payload) => {
    return ActionCreator.createAction(CHOOSE_USER_REQUEST, { ...payload });
};

export const chooseUserSuccess = (data) => {
    const { user, talkId } = data;
    return (dispatch) => {
        dispatch(ActionCreator.createAction(CHOOSE_USER_SUCCESS, { user, talkId }));
    }
};

export const chooseUserFailure = (data) => {
    return ActionCreator.createErrorAction(CHOOSE_USER_FAILURE, { message: data.message, title: "Problem z pobraniem danych z serwera" });
};

export const chooseUser = (companyId, departmentId, type) => (dispatch, getState) => {
    return Requester.get('/options/'+companyId+'/departments/'+departmentId+'/types/'+type, 200, {
        request: chooseUserRequest,
        success: chooseUserSuccess,
        error: chooseUserFailure
    })(dispatch);
};

export const clearUsersList = () => ActionCreator.createAction(CLEAR_USERS_LIST);