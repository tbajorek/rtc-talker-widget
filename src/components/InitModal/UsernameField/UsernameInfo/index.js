import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './style.less';
import getLettersFromName from '../../../../utilities/getLettersFromName';

const UsernameInfo = ({ username, avatar }) => (
  <div className="rtc-talker-username-info">
    <Avatar className="user-avatar" size="large" src={avatar}>{!avatar ? getLettersFromName(username) : null}</Avatar>
    <div className="user-name">{username}</div>
  </div>
);

UsernameInfo.defaultProps = {
  avatar: null,
};

UsernameInfo.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default UsernameInfo;
