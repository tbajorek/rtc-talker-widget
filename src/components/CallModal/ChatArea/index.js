import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import MessageList from './MessageList';
import SendingConsole from './SendingConsole';
import './style.less';

const ChatArea = ({ user, writtenMessage, changeMessage, messages }) => (
  <div className="talker-chat-area">
    <MessageList currentUser={user} messages={messages}/>
    <SendingConsole writtenMessage={writtenMessage} changeMessage={changeMessage} />
  </div>
);

ChatArea.propTypes = {
  writtenMessage: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
};

export default ChatArea;
