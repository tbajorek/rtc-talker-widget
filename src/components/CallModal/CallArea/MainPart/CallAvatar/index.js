import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './style.less';
import { User } from '../../../../../propTypes/User';
import getLettersFromName from '../../../../../utilities/getLettersFromName';

const CallAvatar = ({ user }) => (
    <div className="avatar-field">
        <Avatar className="call-avatar" size="large" src={user.avatar}>{!user.avatar ? getLettersFromName(user.username) : null}</Avatar>
        <span className="connecting-text">Łączenie...</span>
    </div>
);

CallAvatar.propTypes = {
  user: User.propType.isRequired,
};

export default CallAvatar;
