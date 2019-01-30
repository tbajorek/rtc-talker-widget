import * as callWidgetActions from "../../src/actions/widget/call";
import * as usersActions from "../../src/actions/users";
import * as rateWidgetActions from "../../src/actions/widget/rate";
import * as messageActions from "../../src/actions/message";
import * as configActions from "../../src/actions/config";
import * as widgetActions from "../../src/actions/widget";

const _setInitStateActions = [
    {
        type: widgetActions.SET_STATE,
        error: false,
        payload: {
            state: 'init'
        }
    }, {
        type: usersActions.RESET_USERS,
        error: false,
        payload: {}
    }, {
        type: rateWidgetActions.RESET_RATE,
        error: false,
        payload: {}
    }, {
        type: messageActions.RESET_MESSAGES,
        error: false,
        payload: {}
    }, {
    type: messageActions.RESET_UNREAD_MESSAGES,
        error: false,
        payload: {}
    }, {
        type: callWidgetActions.RESET_CALL,
        error: false,
        payload: {}
    }, {
        type: configActions.RELOAD_CONFIG,
        error: false,
        payload: {}
    }
];

export default _setInitStateActions;