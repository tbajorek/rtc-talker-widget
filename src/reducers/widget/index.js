import { combineReducers } from 'redux';
import button from './button';
import init from './init';
import call from './call';
import rate from './rate';
import {SET_STATE, SET_VISIBLE} from '../../actions/widget';

const widgetState = (state = 'init', action) => {
  switch (action.type) {
    case SET_STATE:
      return action.payload.state;
    default:
      return state;
  }
};

const visible = (state = false, action) => {
  switch (action.type) {
    case SET_VISIBLE:
      return action.payload.visible;
    default:
      return state;
  }
};


export default combineReducers({
  button, state: widgetState, visible, init, call, rate
});

export const getWidgetState = state => state.widget.state;
export const isWidgetVisible = state => state.widget.visible;
