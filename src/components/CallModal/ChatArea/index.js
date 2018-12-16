import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendingConsole from './SendingConsole';
import './style.less';

const ChatArea = ({
                      users, writtenMessage, changeMessage, messages, sendMessage, setFileInput, startSelectingFiles
                  }) => (
    <div className="talker-chat-area">
        <MessageList users={users} currentUser={users.user} messages={messages}/>
        <SendingConsole writtenMessage={writtenMessage} changeMessage={changeMessage} sendMessage={() => {
            sendMessage(users.user.id, writtenMessage);
        }} setFileInput={setFileInput} startSelectingFiles={startSelectingFiles}/>
    </div>
);

ChatArea.propTypes = {
    users: PropTypes.shape({
        user: PropTypes.object.isRequired,
        receiver: PropTypes.object.isRequired,
    }).isRequired,
    writtenMessage: PropTypes.string.isRequired,
    changeMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    setFileInput: PropTypes.func.isRequired,
    startSelectingFiles: PropTypes.func.isRequired,
};

export default ChatArea;
