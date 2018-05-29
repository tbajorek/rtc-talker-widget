import React from 'react';
import { Avatar } from 'antd';
import './style.less';
import { User } from '../../../../propTypes/User';
import getLettersFromName from '../../../../utilities/getLettersFromName';

const UsernameInfo = ({ user }) => (
  <div className="rtc-talker-username-info">
    <Avatar className="user-avatar" size="large" src={user.avatar}>{!user.avatar ? getLettersFromName(user.username) : null}</Avatar>
    <div className="user-name">{user.username}</div>
  </div>
);
UsernameInfo.propTypes = {
  user: User.propType.isRequired,
};

export default UsernameInfo;
