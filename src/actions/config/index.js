import ActionCreator from "tbrtc-common/utilities/ActionCreator";

export const LOAD_CONFIG = 'LOAD_CONFIG';
export const RELOAD_CONFIG = 'RELOAD_CONFIG';

export const loadConfig = config => ActionCreator.createAction(LOAD_CONFIG, { config });
export const reloadConfig = config => ActionCreator.createAction(RELOAD_CONFIG);
