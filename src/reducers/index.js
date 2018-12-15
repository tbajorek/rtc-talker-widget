import { combineReducers } from 'redux';
import config from './config';
import users from './users';
import messages from './messages';
import widget from './widget';
import talk from './talk';

import availability from './availability';

export default combineReducers({ config, users, messages, widget, availability, talk });

