import { assert } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as rateWidgetActions from '../../src/actions/widget/rate';
import * as widgetActions from '../../src/actions/widget';
import _setInitStateActions from "./_setInitStateActions";
import * as buttonWidgetActions from "../../src/actions/widget/button";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > widget > rate', () => {
    describe('#setRate()', () => {
        it('should create SET_RATE action', () => {
            const rate = 3.5;
            const action = rateWidgetActions.setRate(rate);
            const actionObject = {
                type: rateWidgetActions.SET_RATE,
                error: false,
                payload: {
                    rate
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#setComment()', () => {
        it('should create SET_COMMENT action', () => {
            const comment = 'comment';
            const action = rateWidgetActions.setComment(comment);
            const actionObject = {
                type: rateWidgetActions.SET_COMMENT,
                error: false,
                payload: {
                    comment
                }
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#resetRate()', () => {
        it('should create RESET_RATE action', () => {
            const action = rateWidgetActions.resetRate();
            const actionObject = {
                type: rateWidgetActions.RESET_RATE,
                error: false,
                payload: {}
            };
            assert.deepEqual(action, actionObject);
        });
    });

    const rejectRateActions = [
        {
            type: widgetActions.SET_VISIBLE,
            error: false,
            payload: {
                visible: false
            }
        }, {
            type: buttonWidgetActions.SHOW_INDICATOR,
            error: false,
            payload: {
                showIndicator: true
            }
        }
    ].concat(_setInitStateActions)
    .concat([
        {
            type: rateWidgetActions.RESET_RATE,
            error: false,
            payload: {}
        }
    ]);

    describe('#rejectRate()', () => {
        it('should reject a rate', () => {
            const store = mockStore({});

            const expectedActions = rejectRateActions;

            store.dispatch(rateWidgetActions.rejectRate());
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#sendRateRequest()', () => {
        it('should create SEND_RATE_REQUEST action', () => {
            const payload = {a: 1, b: 2};
            const action = rateWidgetActions.sendRateRequest(payload);
            const actionObject = {
                type: rateWidgetActions.SEND_RATE_REQUEST,
                error: false,
                payload
            };
            assert.deepEqual(action, actionObject);
        });
    });

    describe('#sendRateSuccess()', () => {
        it('should create SEND_RATE_SUCCESS action  ', () => {
            const store = mockStore({});

            const expectedActions = [
                {
                    type: rateWidgetActions.SEND_RATE_SUCCESS,
                    error: false,
                    payload: {}
                }
            ].concat(rejectRateActions);

            store.dispatch(rateWidgetActions.sendRateSuccess(null));
            assert.deepEqual(store.getActions(), expectedActions);
        });
    });

    describe('#sendRateFailure()', () => {
        it('should create SEND_RATE_FAILURE action', () => {
            const payload = {message: 'Ocena nie została wystawiona'};
            const action = rateWidgetActions.sendRateFailure(payload);
            const actionObject = {
                type: rateWidgetActions.SEND_RATE_FAILURE,
                error: true,
                payload: { message: payload.message, title: "Błąd"}
            };
            assert.deepEqual(action, actionObject);
        });
    });
});