import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';
import './style.less';

const ChatButton = ({ messagesShown, toggleMessageBox }) => (
  <Tooltip title={`${messagesShown ? 'Zwiń' : 'Pokaż'} panel wiadomości`}>
    <Button icon="message" className={`${messagesShown ? 'off' : 'on'} chat-button`} onClick={toggleMessageBox} />
  </Tooltip>
);

ChatButton.propTypes = {
  messagesShown: PropTypes.bool.isRequired,
  toggleMessageBox: PropTypes.func.isRequired,
};

export default ChatButton;
