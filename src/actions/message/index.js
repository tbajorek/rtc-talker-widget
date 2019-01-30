import ActionCreator from "tbrtc-common/utilities/ActionCreator";

import { setWrittenMessage } from '../widget/call';

export const ADD_MESSAGE_TO_LIST = 'ADD_MESSAGE_TO_LIST';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_MESSAGES_VISIBILITY = 'SET_MESSAGES_VISIBILITY';
export const RESET_MESSAGES = 'RESET_MESSAGES';
export const INCREASE_UNREAD_MESSAGES = 'INCREASE_UNREAD_MESSAGES';
export const RESET_UNREAD_MESSAGES = 'RESET_UNREAD_MESSAGES';

export const addMessageToList = (authorId, content, date) => (dispatch) => {
    dispatch(ActionCreator.createAction(ADD_MESSAGE_TO_LIST, { authorId, content, date }));
    dispatch(increaseUnreadMessages());
};
export const setMessagesVisibility = messagesVisibility => (dispatch) => {
    dispatch(ActionCreator.createAction(SET_MESSAGES_VISIBILITY, { messagesVisibility }));
    dispatch(resetUnreadMessages());
};
export const sendMessage = (authorId, content) => (dispatch) => {
  if (content.trim().length) {
    dispatch(ActionCreator.createAction(SEND_MESSAGE, { content }));
  }
  dispatch(setWrittenMessage(''));
};
export const resetMessages = () => (dispatch) => {
  dispatch(ActionCreator.createAction(RESET_MESSAGES));
  dispatch(resetUnreadMessages());
};
export const increaseUnreadMessages = () => ActionCreator.createAction(INCREASE_UNREAD_MESSAGES);
export const resetUnreadMessages = () => ActionCreator.createAction(RESET_UNREAD_MESSAGES);
