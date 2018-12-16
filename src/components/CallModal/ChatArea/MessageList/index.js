import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SingleMessage from './SingleMessage';
import './style.less';

const MessageList = ({ users, messages }) => {
  let key = 0;
  const htmlMessages = messages.toArray().map((message) => {
    const author = users.user.id === message.get('authorId') ? users.user : users.receiver;
    return (<SingleMessage
      currentUser={users.user}
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
  users: PropTypes.shape({
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        avatar: PropTypes.string
    }).isRequired,
    receiver: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        avatar: PropTypes.string
    }).isRequired,
  }).isRequired,
  messages: ImmutablePropTypes.orderedSet.isRequired,
};


/**
 message:
 * authorId,
 * content
 * date
 */
