import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip, Button, Badge} from 'antd';
import './style.less';

const ChatButton = ({ messagesShown, toggleMessageBox, unreadMessages }) => (
    <Badge count={unreadMessages}>
      <Tooltip title={`${messagesShown ? 'Zwiń' : 'Pokaż'} panel wiadomości`}>
        <Button icon="message" className={`${messagesShown ? 'off' : 'on'} chat-button`} onClick={() => toggleMessageBox(!messagesShown)}  htmlType="button"/>
      </Tooltip>
    </Badge>
);

ChatButton.propTypes = {
  messagesShown: PropTypes.bool.isRequired,
  toggleMessageBox: PropTypes.func.isRequired,
  unreadMessages: PropTypes.number.isRequired,
};

export default ChatButton;
