import React from 'react';
import ReactDOM from 'react-dom';
import Selector from 'selector-lite';
import _ from 'underscore';
import Widget from './components/Widget';

const uuidv4 = require('uuid/v4');

// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

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
      ReactDOM.render(<Widget config={newConfig} />, element);
    } else {
      console.error(`The given selector: ${config.place} doesn't exist!`);
    }
  },
};
