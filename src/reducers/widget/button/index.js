import { Map } from 'immutable';

import { SET_ICON, SET_COLOR, SET_BACKGROUND_COLOR, SET_SHAPE, SHOW_INDICATOR } from '../../../actions/widget/button/index';
import { LOAD_CONFIG } from '../../../actions/config/index';
import getFromComplexObject from '../../../utilities/getFromComplexObject';

const defaultState = Map({
  icon: 'solution',
  color: 'rgb(255, 239, 206)',
  backgroundColor: 'rgb(216, 68, 9)',
  shape: 'circle',
  showIndicator: false,
});

const button = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ICON:
      return state.set('icon', action.payload.icon);
    case SET_COLOR:
      return state.set('color', action.payload.color);
    case SET_BACKGROUND_COLOR:
      return state.set('backgroundColor', action.payload.backgroundColor);
    case SET_SHAPE:
      return state.set('shape', action.payload.shape);
    case SHOW_INDICATOR:
      return state.set('showIndicator', action.payload.showIndicator);
    case LOAD_CONFIG:
      let newState = state;

      const icon = getFromComplexObject(action.payload, ['config', 'button', 'icon']);
      if (icon !== null) {
        newState = newState.set('icon', icon);
      }

      const color = getFromComplexObject(action.payload, ['config', 'button', 'color']);
      if (color !== null) {
        newState = newState.set('color', color);
      }

      const backgroundColor = getFromComplexObject(action.payload, ['config', 'button', 'backgroundColor']);
      if (backgroundColor !== null) {
        newState = newState.set('backgroundColor', backgroundColor);
      }

      const shape = getFromComplexObject(action.payload, ['config', 'button', 'shape']);
      if (shape !== null) {
        newState = newState.set('shape', shape);
      }

      newState.set('showIndicator', false);
      return newState;
    default:
      return state;
  }
};

export default button;

export const getIcon = state => state.widget.button.get('icon');
export const getColor = state => state.widget.button.get('color');
export const getBackgroundColor = state => state.widget.button.get('backgroundColor');
export const getShape = state => state.widget.button.get('shape');
export const isShownIndicator = state => state.widget.button.get('showIndicator');
