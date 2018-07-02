import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SingleMessage from './SingleMessage';
import './style.less';

const MessageList = ({ users, messages }) => {
  let key = 0;
  const htmlMessages = messages.toArray().map((message) => {
    const author = users.get('user').get('id') === message.get('authorId') ? users.get('user') : users.get('receiver');
    return (<SingleMessage
      currentUser={users.get('user')}
      author={author}
      content={message.get('content')}
      date={message.get('date')}
      key={key++}
    />);
  });
  return (
    <div className="message-list">
      { htmlMessages }
    </div>
  );
};
export default MessageList;

MessageList.propTypes = {
  users: ImmutablePropTypes.contains({
    user: ImmutablePropTypes.map.isRequired,
    receiver: ImmutablePropTypes.map.isRequired,
  }).isRequired,
  messages: ImmutablePropTypes.orderedSet.isRequired,
};


/**
 message:
 * authorId,
 * content
 * date
 */
