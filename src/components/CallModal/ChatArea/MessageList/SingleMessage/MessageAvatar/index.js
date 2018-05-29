import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './style.less';

import { User } from '../../../../../../propTypes/User';
import getLettersFromName from '../../../../../../utilities/getLettersFromName';

const MessageAvatar = ({ user }) => (
  <Avatar className="message-avatar" src={user.avatar}>{!user.avatar ? getLettersFromName(user.username) : null}</Avatar>
);

MessageAvatar.propTypes = {
  user: User.propType.isRequired,
};

export default MessageAvatar;
