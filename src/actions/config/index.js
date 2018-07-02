import { createAction } from 'redux-actions';

export const LOAD_CONFIG = 'LOAD_CONFIG';

export const loadConfig = config => createAction(LOAD_CONFIG)({ config });
