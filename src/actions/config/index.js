import { createAction } from 'redux-actions';

export const LOAD_CONFIG = 'LOAD_CONFIG';
export const RELOAD_CONFIG = 'RELOAD_CONFIG';

export const loadConfig = config => createAction(LOAD_CONFIG)({ config });
export const reloadConfig = config => createAction(RELOAD_CONFIG)();
