import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import emotes from 'emote-icons';
import 'emote-icons/src/emote-icons-sm.css';
import MessageAvatar from '../MessageAvatar';
import './style.less';

const MessageContent = ({
  author, content, type,
}) => {
  const className = `message-content ${type}`;
  const parsedContent = ReactHtmlParser(emotes(content));
  let message;
  if (type === 'outgoing') {
      message = (
          <div className="main">
              <div className={className}>{parsedContent}</div>
              <MessageAvatar user={author} />
          </div>
      );
  } else {
      message = (
          <div className="main">
              <MessageAvatar user={author} />
              <div className={className}>{parsedContent}</div>
          </div>
      );
  }
  return message;
};

MessageContent.propTypes = {
  author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      avatar: PropTypes.string
  }).isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default MessageContent;
