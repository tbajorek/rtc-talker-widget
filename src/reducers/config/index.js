import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { LOAD_CONFIG } from '../../actions/config';


const config = (state = Map(), action) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return Map(action.payload.config);
    default:
      return state;
  }
};

export default config;

export const getConfig = state => state.config;
