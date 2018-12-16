import _ from 'underscore';
import {getDepartments, getRemoteUsers} from "../reducers/availability";
import {
    CHECK_USERS_SUCCESS,
    checkDepartments,
    checkRemoteUsers,
    chooseUser,
    setAvailableChannels
} from "../actions/availability";
import {getConfig} from "../reducers/config";
import {SET_DEPARTMENT} from "../actions/widget/init";
import {SET_INITIALIZING_CALL} from "../actions/widget/call";
import {getDepartment} from "../reducers/widget/init";
import {getCallType} from "../reducers/widget/call";
import {loadConfig, RELOAD_CONFIG} from "../actions/config";

export default store => next => (action) => {
    switch (action.type) {
        case SET_DEPARTMENT: {
            const state = store.getState();
            const remoteUsers = getRemoteUsers(state);
            if('length' in remoteUsers && remoteUsers.length === 0) {
                store.dispatch(checkRemoteUsers(getConfig(state).get('companyId'), action.payload.department));
            }
            break;
        }
        case CHECK_USERS_SUCCESS: {
            const result = next(action);
            const { users } = action.payload;
            const channels = users.reduce((channels, user) => _.union(channels, user.availability), []);
            store.dispatch(setAvailableChannels(channels));
            return result;
        }
        case SET_INITIALIZING_CALL: {
            if(action.payload.initializing) {
                const state = store.getState();
                const companyId = getConfig(state).get('companyId');
                const departmentId = getDepartment(state);
                const callType = getCallType(state);
                store.dispatch(chooseUser(companyId, departmentId, callType));
            }
            break;
        }
        case RELOAD_CONFIG:
            const config = getConfig(store.getState());
            store.dispatch(loadConfig(config));
            break;
    }
    return next(action);
};