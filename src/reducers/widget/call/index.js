import { Map } from 'immutable';

import {
    SET_CALL_TYPE,
    SET_CONNECTING,
    SET_VOLUME,
    SET_WRITTEN_MESSAGE,
    SET_MUTE_AUDIO,
    SET_MUTE_VIDEO,
    RESET_CALL,
    SET_INITIALIZING_CALL
} from '../../../actions/widget/call';

const defaultState = Map({
  type: null,
  connecting: false,
  volume: 50,
  writtenMessage: '',
  muted: Map({
    audio: false,
    video: false,
  }),
});

const call = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INITIALIZING_CALL:
        return state.set('initializing', action.payload.initializing);
    case SET_CALL_TYPE:
      return state.set('type', action.payload.type);
    case SET_CONNECTING:
      return state.set('connecting', action.payload.connecting);
    case SET_VOLUME:
      return state.set('volume', action.payload.volume);
    case SET_WRITTEN_MESSAGE:
      return state.set('writtenMessage', action.payload.writtenMessage);
    case SET_MUTE_AUDIO:
      return state.setIn(['muted', 'audio'], action.payload.muted);
    case SET_MUTE_VIDEO:
      return state.setIn(['muted', 'video'], action.payload.muted);
    case RESET_CALL:
      return state.setIn(['muted', 'audio'], false)
        .setIn(['muted', 'video'], false)
        .set('volume', 50)
        .set('writtenMessage', '');
    default:
      return state;
  }
};

export default call;

export const getCallType = state => state.widget.call.get('type');
export const isInitializing = state => state.widget.call.get('initializing');
export const isConnecting = state => state.widget.call.get('connecting');
export const getVolume = state => state.widget.call.get('volume');
export const getWrittenMessage = state => state.widget.call.get('writtenMessage');
export const isMutedAudio = state => state.widget.call.get('muted').get('audio');
export const isMutedVideo = state => state.widget.call.get('muted').get('video');
