import { assert } from 'chai';

import * as buttonWidgetActions from '../../src/actions/widget/button';

describe('actions > widget > button', () => {
    describe('#setIcon()', () => {
        it('should create SET_ICON action', () => {
            const icon = 'icon';
            const action = buttonWidgetActions.setIcon(icon);
            const actionObject = {
                type: buttonWidgetActions.SET_ICON,
                error: false,
                payload: {
                    icon
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setColor()', () => {
        it('should create SET_COLOR action', () => {
            const color = 'color';
            const action = buttonWidgetActions.setColor(color);
            const actionObject = {
                type: buttonWidgetActions.SET_COLOR,
                error: false,
                payload: {
                    color
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setBackgroundColor()', () => {
        it('should create SET_BACKGROUND_COLOR action', () => {
            const backgroundColor = 'backgroundColor';
            const action = buttonWidgetActions.setBackgroundColor(backgroundColor);
            const actionObject = {
                type: buttonWidgetActions.SET_BACKGROUND_COLOR,
                error: false,
                payload: {
                    backgroundColor
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setShape()', () => {
        it('should create SET_SHAPE action', () => {
            const shape = 'shape';
            const action = buttonWidgetActions.setShape(shape);
            const actionObject = {
                type: buttonWidgetActions.SET_SHAPE,
                error: false,
                payload: {
                    shape
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#showIndicator()', () => {
        it('should create SHOW_INDICATOR action', () => {
            const show = 'show';
            const action = buttonWidgetActions.showIndicator(show);
            const actionObject = {
                type: buttonWidgetActions.SHOW_INDICATOR,
                error: false,
                payload: {
                    showIndicator: show
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });
});