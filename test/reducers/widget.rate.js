import { assert } from 'chai';
import { Map } from 'immutable';

import reducer from '../../src/reducers/widget/rate';
import * as rateWidgetActions from '../../src/actions/widget/rate';

describe('reducers > widget > rate', () => {
    const initialState = Map({
        rate: 0,
        comment: '',
    });

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_RATE action', () => {
        const rate = 3.5;
        const returnedState = reducer(initialState, rateWidgetActions.setRate(rate));
        assert.deepEqual(returnedState, initialState.set('rate', rate));
    });

    it('should handle SET_COMMENT action', () => {
        const comment = 'comment';
        const returnedState = reducer(initialState, rateWidgetActions.setComment(comment));
        assert.deepEqual(returnedState, initialState.set('comment', comment));
    });

    it('should handle RESET_RATE action', () => {
        const returnedState = reducer(initialState.set('comment', 'test').set('rate', 5.0), rateWidgetActions.resetRate());
        assert.deepEqual(returnedState, initialState);
    });
});