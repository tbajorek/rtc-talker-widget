import { combineReducers } from 'redux';
import config from './config';
import users from './users';
import messages from './messages';
import widget from './widget';
import channels from './channels';
import departments from './departments';

export default combineReducers({ config, users, messages, widget, channels, departments });

