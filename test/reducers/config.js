import { assert } from 'chai';
import { Map } from 'immutable';

import reducer from '../../src/reducers/config';
import * as configActions from '../../src/actions/config';

describe('reducers > config', () => {
    const initialState = Map();

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle LOAD_CONFIG action', () => {
        const config = {
            a: 1,
            b: 'Test',
            c: {
                id: 5
            }
        };
        const returnedState = reducer(initialState, configActions.loadConfig(config));
        assert.deepEqual(returnedState.toObject(), config);
    });
});