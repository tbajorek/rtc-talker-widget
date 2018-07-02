import { createAction } from 'redux-actions';
import moment from 'moment';

import { setWrittenMessage } from '../widget/call';

export const ADD_MESSAGE_TO_LIST = 'ADD_MESSAGE_TO_LIST';
export const SET_MESSAGES_VISIBILITY = 'SET_MESSAGES_VISIBILITY';
export const RESET_MESSAGES = 'RESET_MESSAGES';

export const addMessageToList = (authorId, content, date) => createAction(ADD_MESSAGE_TO_LIST)({ authorId, content, date });
export const setMessagesVisibility = messagesVisibility => createAction(SET_MESSAGES_VISIBILITY)({ messagesVisibility });
export const sendMessage = (authorId, content) => (dispatch) => {
  if (content.trim().length) {
    dispatch(addMessageToList(authorId, content, moment().format()));
  }
  dispatch(setWrittenMessage(''));
};
export const resetMessages = () => createAction(RESET_MESSAGES)({});
