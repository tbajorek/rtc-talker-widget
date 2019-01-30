import { assert } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as widgetActions from '../../src/actions/widget';
import * as buttonWidgetActions from '../../src/actions/widget/button';
import _setInitStateActions from "./_setInitStateActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > widget', () => {
    describe('#setState()', () => {
        it('should set a correct init state', () => {
            const store = mockStore({});
            const state = 'init';

            const expectedActions = _setInitStateActions;

            store.dispatch(widgetActions.setState(state));
            assert.deepEqual(store.getActions(), expectedActions);
        });

        it('should set a correct state, different than init', () => {
            const store = mockStore({});
            const state = 'rate';

            const expectedActions = [
                {
                    type: widgetActions.SET_STATE,
                    error: false,
                    payload: {
                        state
                    }
                }
            ];

            store.dispatch(widgetActions.setState(state));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#setVisible()', () => {
        it('should set a correct visibility', () => {
            const store = mockStore({});
            const visible = true;

            const expectedActions = [
                {
                    type: widgetActions.SET_VISIBLE,
                    error: false,
                    payload: {
                        visible
                    }
                }, {
                    type: buttonWidgetActions.SHOW_INDICATOR,
                    error: false,
                    payload: {
                        showIndicator: !visible
                    }
                }
            ];

            store.dispatch(widgetActions.setVisible(visible));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });
});