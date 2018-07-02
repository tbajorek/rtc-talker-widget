import React from 'react';
import ReactDOM from 'react-dom';
import Selector from 'selector-lite';
import { Provider } from 'react-redux';
import moment from 'moment';
import _ from 'underscore';
import initStore from './initStore';
import { loadConfig } from './actions/config';
import Widget from './containers/Widget';

const uuidv4 = require('uuid/v4');
moment.locale('pl');

// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

const store = initStore();

const MainContainer = () => (
  <Provider store={store}>
    <Widget />
  </Provider>
);

window.RtcTalker = {
  initWidget: (config) => {
    const newConfig = _.defaults(config, {
      user: {
        id: uuidv4(),
        username: null,
        avatar: null,
      },
      place: '#rtc-talker-widget',
      channels: ['email'],
      departments: {},
      department: null,
    });
    const element = Selector.find(document, config.place, true);
    if (element !== null && typeof element === 'object') {
      store.dispatch(loadConfig(newConfig));
      ReactDOM.render(<MainContainer />, element);
    } else {
      console.error(`The given selector: ${config.place} doesn't exist!`);
    }
  },
};
