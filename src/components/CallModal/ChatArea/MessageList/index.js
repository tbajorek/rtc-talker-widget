import React from 'react';
import PropTypes from 'prop-types';
import { } from 'antd';
import SingleMessage from './SingleMessage';
import './style.less';

const MessageList = ({ currentUser, messages }) => {
  let key = 0;
  const htmlMessages = messages.map(message => <SingleMessage {...message} key={key++} currentUser={currentUser} />);
  return (
    <div className="message-list">
      { htmlMessages }
    </div>
  );
};
export default MessageList;


/**
 message:
 * author,
 * content
 * date
 */
