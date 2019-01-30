import { assert } from 'chai';
import { Map } from 'immutable';

import reducer from '../../src/reducers/widget/button';
import * as buttonWidgetActions from '../../src/actions/widget/button';
import * as configActions from '../../src/actions/config';

describe('reducers > widget > button', () => {
    const initialState = Map({
        icon: 'solution',
        color: 'rgb(255, 239, 206)',
        backgroundColor: 'rgb(216, 68, 9)',
        shape: 'circle',
        showIndicator: false,
    });

    it('should return the initial state', () => {
        const returnedState = reducer(undefined, {});
        assert.deepEqual(returnedState, initialState);
    });

    it('should handle SET_ICON action', () => {
        const icon = 'house';
        const returnedState = reducer(initialState, buttonWidgetActions.setIcon(icon));
        assert.deepEqual(returnedState, initialState.set('icon', icon));
    });

    it('should handle SET_ICON action', () => {
        const color = 'red';
        const returnedState = reducer(initialState, buttonWidgetActions.setColor(color));
        assert.deepEqual(returnedState, initialState.set('color', color));
    });

    it('should handle SET_BACKGROUND_COLOR action', () => {
        const backgroundColor = 'red';
        const returnedState = reducer(initialState, buttonWidgetActions.setBackgroundColor(backgroundColor));
        assert.deepEqual(returnedState, initialState.set('backgroundColor', backgroundColor));
    });

    it('should handle SET_ICON action', () => {
        const shape = 'square';
        const returnedState = reducer(initialState, buttonWidgetActions.setShape(shape));
        assert.deepEqual(returnedState, initialState.set('shape', shape));
    });

    it('should handle SHOW_INDICATOR action', () => {
        const showIndicator = true;
        const returnedState = reducer(initialState, buttonWidgetActions.showIndicator(showIndicator));
        assert.deepEqual(returnedState, initialState.set('showIndicator', showIndicator));
    });

    it('should load data from config', () => {
        const config = {
            button: {
                icon: 'house',
                color: 'black',
                backgroundColor: 'white',
                shape: 'square'
            }
        };
        const returnedState = reducer(initialState, configActions.loadConfig(config));
        assert.deepEqual(returnedState, initialState.set('icon', config.button.icon)
            .set('color', config.button.color)
            .set('backgroundColor', config.button.backgroundColor)
            .set('shape', config.button.shape)
            .set('showIndicator', false)
        );
    });
});