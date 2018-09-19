import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Avatar } from 'antd';
import './style.less';

import getLettersFromName from '../../../../../../utilities/getLettersFromName';
import PropTypes from "prop-types";

const MessageAvatar = ({ user }) => (
  <Avatar className="message-avatar" src={user.avatar}>{!user.avatar ? getLettersFromName(`${user.name} ${user.surname}`) : null}</Avatar>
);

MessageAvatar.propTypes = {
  user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      avatar: PropTypes.string
  }).isRequired,
};

export default MessageAvatar;
