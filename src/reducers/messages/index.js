import { OrderedSet, Map } from 'immutable';

import {
  ADD_MESSAGE_TO_LIST,
  INCREASE_UNREAD_MESSAGES,
  RESET_MESSAGES, RESET_UNREAD_MESSAGES,
  SET_MESSAGES_VISIBILITY
} from '../../actions/message';

const initialState = {
    list: OrderedSet(),
    visibility: false,
    unreadMessages: 0
};

const messages = (state = initialState, action) => {
    switch (action.type) {
        //list
        case ADD_MESSAGE_TO_LIST:
            const { authorId, content, date } = action.payload;
            return {
                ...state,
                list: state.list.add(Map({ authorId, content, date }))
            };
        //visibility
        case SET_MESSAGES_VISIBILITY:
            return {
                ...state,
                visibility: action.payload.messagesVisibility
            };
        //unreadMessages
        case INCREASE_UNREAD_MESSAGES:
            let unreadMessagesNumber = state.unreadMessages;
            if(!state.visibility) {
                ++unreadMessagesNumber;
            }
            return {
                ...state,
                unreadMessages: unreadMessagesNumber
            };
        case RESET_UNREAD_MESSAGES:
            return {
                ...state,
                unreadMessages: 0
            };
        //common
        case RESET_MESSAGES:
            return initialState;
        default:
            return state;
    }
};

export default messages;

export const getMessageList = state => state.messages.list;
export const getMessageVisibility = state => state.messages.visibility;
export const getUnreadMessagesNumber = state => state.messages.unreadMessages;
