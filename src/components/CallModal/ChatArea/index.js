import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendingConsole from './SendingConsole';
import './style.less';
import ImmutablePropTypes from 'react-immutable-proptypes';

const ChatArea = ({
  users, writtenMessage, changeMessage, messages, sendMessage,
}) => (
  <div className="talker-chat-area">
    <MessageList users={users} currentUser={users.get('user')} messages={messages} />
    <SendingConsole writtenMessage={writtenMessage} changeMessage={changeMessage} sendMessage={() => { sendMessage(users.get('user').get('id'), writtenMessage); }} />
  </div>
);

ChatArea.propTypes = {
  users: ImmutablePropTypes.contains({
    user: ImmutablePropTypes.map.isRequired,
    receiver: ImmutablePropTypes.map.isRequired,
  }).isRequired,
  writtenMessage: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChatArea;
