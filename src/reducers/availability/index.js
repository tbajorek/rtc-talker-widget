import {
    CHECK_DEPARTMENTS_SUCCESS,
    CHECK_USERS_SUCCESS, CHOOSE_USER_SUCCESS,
    CLEAR_USERS_LIST,
    SET_AVAILABLE_CHANNELS
} from "../../actions/availability";

const availability = (state = {departments: [], users: [], channels: [], talkId: null}, action) => {
    switch (action.type) {
        case CHECK_DEPARTMENTS_SUCCESS:
            return {...state, departments: action.payload.departments};
        case CLEAR_USERS_LIST:
            return {...state, users: []};
        case CHECK_USERS_SUCCESS:
            return {...state, users: action.payload.users};
        case SET_AVAILABLE_CHANNELS:
            return {...state, channels: action.payload.channels};
        case CHOOSE_USER_SUCCESS:
            return {...state, talkId: action.payload.talkId};
    }
    return state;
};

export default availability;

export const getDepartments = state => state.availability.departments;
export const getRemoteUsers = state => state.availability.users;
export const getChannels = state => state.availability.channels;
export const getTalkId = state => state.availability.talkId;