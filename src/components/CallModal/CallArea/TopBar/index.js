import React from 'react';
import PropTypes from 'prop-types';
import ChatButton from './ChatButton';
import './style.less';

const TopBar = ({ connecting, unreadMessages, ...props }) => (
  <div className="talker-call-menu-top">
    <div className="menu-filler" />
    { !connecting ? <ChatButton {...props} unreadMessages={unreadMessages} /> : null }
  </div>
);

TopBar.propTypes = {
  connecting: PropTypes.bool.isRequired,
  unreadMessages: PropTypes.number.isRequired
};

export default TopBar;
