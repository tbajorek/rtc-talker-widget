import { combineReducers } from 'redux';
import { OrderedSet, Map } from 'immutable';

import { ADD_MESSAGE_TO_LIST, RESET_MESSAGES, SET_MESSAGES_VISIBILITY } from '../../actions/message';

const list = (state = OrderedSet(), action) => {
  switch (action.type) {
    case ADD_MESSAGE_TO_LIST:
      const { authorId, content, date } = action.payload;
      return state.add(Map({ authorId, content, date }));
    case RESET_MESSAGES:
      return OrderedSet();
    default:
      return state;
  }
};

const visibility = (state = false, action) => {
  switch (action.type) {
    case SET_MESSAGES_VISIBILITY:
      return action.payload.messagesVisibility;
    case RESET_MESSAGES:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ list, visibility });

export const getMessageList = state => state.messages.list;
export const getMessageVisibility = state => state.messages.visibility;
