import { createAction } from 'redux-actions';

export const SET_ICON = 'SET_ICON';
export const SET_COLOR = 'SET_COLOR';
export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
export const SET_SHAPE = 'SET_SHAPE';
export const SHOW_INDICATOR = 'SHOW_INDICATOR';

export const setIcon = icon => createAction(SET_ICON)({ icon });
export const setColor = color => createAction(SET_COLOR)({ color });
export const setBackgroundColor = backgroundColor => createAction(SET_BACKGROUND_COLOR)({ backgroundColor });
export const setShape = shape => createAction(SET_SHAPE)({ shape });
export const showIndicator = show => createAction(SHOW_INDICATOR)({ showIndicator: show });
