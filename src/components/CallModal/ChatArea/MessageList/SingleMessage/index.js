import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import MessageContent from './MessageContent';

import './style.less';

const SingleMessage = ({
  currentUser, author, content, date,
}) => {
  const messageType = currentUser.get('id') === author.get('id') ? 'outgoing' : 'incoming';

  return (
    <div className="single-message">
      <MessageContent author={author} content={content} type={messageType} />
      <div className="footer">
        <div className="menu-filler" />
        <div className="message-date">{date}</div>
      </div>
    </div>
  );
};

SingleMessage.propTypes = {
  currentUser: ImmutablePropTypes.map.isRequired,
  author: ImmutablePropTypes.map.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SingleMessage;
