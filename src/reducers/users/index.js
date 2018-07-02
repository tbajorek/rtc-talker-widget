import { Map } from 'immutable';

import {
  SET_USER,
  SET_USER_DATA,
  SET_USER_SINGLE_DATA,
  SET_RECEIVER,
  SET_RECEIVER_DATA,
  SET_RECEIVER_SINGLE_DATA,
  RESET_USERS,
} from '../../actions/users';
import { LOAD_CONFIG } from '../../actions/config';
import getFromComplexObject from '../../utilities/getFromComplexObject';

const uuidv4 = require('uuid/v4');

const defaultState = Map({
  user: Map(),
  receiver: Map({
    id: uuidv4(),
    username: 'Jacob Freeman',
    avatar: 'https://ictatnhs.files.wordpress.com/2010/01/my-avatar.jpg',
  }),
});

const users = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return state.get('user').set(Map(action.payload.user));
    case SET_USER_DATA:
      return state.get('user')
        .set('id', action.payload.id)
        .set('username', action.payload.username)
        .set('avatar', action.payload.avatar);
    case SET_USER_SINGLE_DATA:
      return state.setIn(['user', action.payload.name], action.payload.value);
    case SET_RECEIVER:
      return state.setIn(['receiver', action.payload.name], action.payload.value);
    case SET_RECEIVER_DATA:
      return state.get('receiver')
        .set('id', action.payload.id)
        .set('username', action.payload.username)
        .set('avatar', action.payload.avatar);
    case SET_RECEIVER_SINGLE_DATA:
      return state.get('receiver').set(action.payload.name, action.payload.value);
    case RESET_USERS:
      return state.set('receiver', defaultState.get('receiver'));
    case LOAD_CONFIG:
    {
      const user = getFromComplexObject(action.payload, ['config', 'user']);
      let newState = state;
      if (user !== null) {
        newState = state.set('user', Map(user));
      }
      return newState;
    }
    default:
      return state;
  }
};

export default users;

export const getUsers = state => state.users;
export const getUserData = state => state.users.get('user');
export const getReceiverData = state => state.users.get('receiver');
