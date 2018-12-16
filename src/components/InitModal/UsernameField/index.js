import React from 'react';
import PropTypes from 'prop-types';

import UsernameForm from './UsernameForm';
import UsernameInfo from './UsernameInfo';

const UsernameField = ({
  username, avatar, changeUsername, usernameValidation, isGivenUser,
}) => {
  if (isGivenUser) {
    return <UsernameInfo username={username} avatar={avatar} />;
  }
  return <UsernameForm username={username} changeUsername={changeUsername} validation={usernameValidation} />;
};

UsernameField.defaultProps = {
  avatar: null,
};

UsernameField.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  usernameValidation: PropTypes.bool.isRequired,
  isGivenUser: PropTypes.bool.isRequired,
  changeUsername: PropTypes.func.isRequired,
};

export default UsernameField;
