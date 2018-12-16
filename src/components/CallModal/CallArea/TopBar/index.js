import React from 'react';
import PropTypes from 'prop-types';
import ChatButton from './ChatButton';
import './style.less';

const TopBar = ({ connecting, ...props }) => (
  <div className="talker-call-menu-top">
    <div className="menu-filler" />
    { !connecting ? <ChatButton {...props} /> : null }
  </div>
);

TopBar.propTypes = {
  connecting: PropTypes.bool.isRequired,
};

export default TopBar;
