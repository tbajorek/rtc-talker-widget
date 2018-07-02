import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Avatar } from 'antd';
import './style.less';

import getLettersFromName from '../../../../../../utilities/getLettersFromName';

const MessageAvatar = ({ user }) => (
  <Avatar className="message-avatar" src={user.get('avatar')}>{!user.get('avatar') ? getLettersFromName(user.get('username')) : null}</Avatar>
);

MessageAvatar.propTypes = {
  user: ImmutablePropTypes.map.isRequired,
};

export default MessageAvatar;
