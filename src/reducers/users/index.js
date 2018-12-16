import { Map } from 'immutable';

import {
    SET_USER,
    SET_RECEIVER,
    RESET_USERS, SET_USER_ID,
} from '../../actions/users';
import { LOAD_CONFIG } from '../../actions/config';
import {CHOOSE_USER_SUCCESS} from "../../actions/availability";

const uuidv4 = require('uuid/v4');

const defaultState = {
  user: null,
  receiver: null
};

const users = (state = defaultState, action) => {
  switch (action.type) {
      case SET_USER:
        return {...state, user: {...action.payload.user}};
      case SET_USER_ID:
          return {...state, user: {...state.user, id: action.payload.userId}};
      case SET_RECEIVER:
      case CHOOSE_USER_SUCCESS:
        return {...state, receiver: {...action.payload.user}};
      case RESET_USERS:
          return defaultState;
    case LOAD_CONFIG:
    {
      const user = action.payload.config.user;
      return {...state, user: {...user}};
    }
    default:
      return state;
  }
};

export default users;

export const getUsers = state => state.users;
export const getUser = state => state.users.user;
export const getReceiver = state => state.users.receiver;
