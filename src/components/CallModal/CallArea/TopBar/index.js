import React from 'react';
import PropTypes from 'prop-types';
import ChatButton from './ChatButton';
import './style.less';

const TopBar = ({ ...props }) => (
  <div className="talker-call-menu-top">
    <div className="menu-filler" />
    <ChatButton {...props} />
  </div>
);

export default TopBar;
