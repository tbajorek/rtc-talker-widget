import React from 'react';
import PropTypes from 'prop-types';

import UsernameForm from './UsernameForm';
import UsernameInfo from './UsernameInfo';

const UsernameField = ({ user, username, ...props }) => {
  if (user.username === null && user.avatar === null) {
    return <UsernameForm {...props} username={username} />;
  }
  return <UsernameInfo user={user} />;
};

UsernameField.defaultProps = {
  username: null,
};

UsernameField.propTypes = {
  username: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    username: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

export default UsernameField;
