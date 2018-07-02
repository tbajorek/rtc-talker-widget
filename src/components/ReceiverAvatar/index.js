import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Avatar } from 'antd';
import './style.less';
import getLettersFromName from '../../utilities/getLettersFromName';

const ReceiverAvatar = ({ user, descriptionVisible, descriptionText }) => (
  <div className="avatar-field">
    <Avatar className="call-avatar" size="large" src={user.get('avatar')}>{!user.get('avatar') ? getLettersFromName(user.get('username')) : null}</Avatar>
    { descriptionVisible ? <span className="description-text">{descriptionText}</span> : null }
  </div>
);

ReceiverAvatar.propTypes = {
  user: ImmutablePropTypes.map.isRequired,
  descriptionVisible: PropTypes.bool.isRequired,
  descriptionText: PropTypes.string.isRequired,
};

export default ReceiverAvatar;
