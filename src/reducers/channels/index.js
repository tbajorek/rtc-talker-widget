import { List } from 'immutable';

import { LOAD_CONFIG } from '../../actions/config';
import getFromComplexObject from '../../utilities/getFromComplexObject';

const channels = (state = List(), action) => {
  switch (action.type) {
    case LOAD_CONFIG:
      let newState = state;
      const channels = getFromComplexObject(action.payload, ['config', 'channels']);
      if (channels !== null) {
        newState = List(channels);
      }
      return newState;
    default:
      return state;
  }
};

export default channels;

export const getChannels = state => state.channels;
