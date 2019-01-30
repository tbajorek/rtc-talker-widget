import { assert } from 'chai';

import * as configActions from '../../src/actions/config';

describe('actions > config', () => {
    describe('#loadConfig()', () => {
        it('should create LOAD_CONFIG action', () => {
            const config = {a: 1, b: 2};
            const action = configActions.loadConfig(config);
            const actionObject = {
                type: configActions.LOAD_CONFIG,
                error: false,
                payload: {
                    config
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#reloadConfig()', () => {
        it('should create RELOAD_CONFIG action', () => {
            const config = {a: 1, b: 2};
            const action = configActions.reloadConfig(config);
            const actionObject = {
                type: configActions.RELOAD_CONFIG,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });
});