import { Map } from 'immutable';
import { SET_COMMENT, SET_RATE, RESET_RATE } from '../../../actions/widget/rate';

const defaultState = Map({
  rate: 0,
  comment: '',
});

const rate = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RATE:
      return state.set('rate', action.payload.rate);
    case SET_COMMENT:
      return state.set('comment', action.payload.comment);
    case RESET_RATE:
      return defaultState;
    default:
      return state;
  }
};

export default rate;

export const getRate = state => state.widget.rate.get('rate');
export const getComment = state => state.widget.rate.get('comment');
