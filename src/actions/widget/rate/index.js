import Requester from "tbrtc-common/utilities/Requester";
import ActionCreator from "tbrtc-common/utilities/ActionCreator";

import { setState, setVisible } from '../index';
import Messages from "../../../utilities/Messages";

export const SET_RATE = 'SET_RATE';
export const SET_COMMENT = 'SET_COMMENT';
export const SEND_RATE_REQUEST = 'SEND_RATE_REQUEST';
export const SEND_RATE_SUCCESS = 'SEND_RATE_SUCCESS';
export const SEND_RATE_FAILURE = 'SEND_RATE_FAILURE';
export const RESET_RATE = 'RESET_RATE';

export const setRate = rate => ActionCreator.createAction(SET_RATE, { rate });
export const setComment = comment => ActionCreator.createAction(SET_COMMENT, { comment });
export const resetRate = () => ActionCreator.createAction(RESET_RATE);

export const rejectRate = () => (dispatch) => {
  dispatch(setVisible(false));
  dispatch(setState('init'));
  dispatch(resetRate());
};

export const sendRateRequest = (payload) => {
    return ActionCreator.createAction(SEND_RATE_REQUEST, { ...payload });
};

export const sendRateSuccess = (data) => {
    return (dispatch) => {
        dispatch(ActionCreator.createAction(SEND_RATE_SUCCESS));
        Messages.success("Sukces", 'Ocena została wystawiona');
        dispatch(rejectRate());
    }
};

export const sendRateFailure = (data) => {
    return ActionCreator.createErrorAction(SEND_RATE_FAILURE, { message: 'Ocena nie została wystawiona', title: "Błąd" });
};

export const sendRate = (userId, receiverId, rate, comment, talkId) => (dispatch, getState) => {
    return Requester.post('/rates/'+receiverId, 201, {rate, comment, talk_id: talkId}, {
        request: sendRateRequest,
        success: sendRateSuccess,
        error: sendRateFailure
    })(dispatch);
};