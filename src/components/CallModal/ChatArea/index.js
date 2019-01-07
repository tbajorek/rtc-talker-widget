import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendingConsole from './SendingConsole';
import './style.less';
import EndCall from "../CallArea/BottomBar/EndCall";

const ChatArea = ({
                      connecting, messagesShown, callType, users, writtenMessage, changeMessage, messages,
                      sendMessage, finishTalk, setFileInput, startSelectingFiles
                  }) => (
    <div className={`talker-chat-area${(connecting === false && (messagesShown || callType === 'chat')) ? '' : ' hidden'}`}>
        <MessageList users={users} currentUser={users.user} messages={messages}/>
        <SendingConsole writtenMessage={writtenMessage} changeMessage={changeMessage} sendMessage={(e) => {
            sendMessage(users.user.id, writtenMessage);
            e.preventDefault();
            e.stopPropagation();
        }} setFileInput={setFileInput} startSelectingFiles={startSelectingFiles}/>
        {callType === 'chat' ? <EndCall connecting={connecting} finishTalk={() => finishTalk(false)} /> : null}
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
    finishTalk: PropTypes.func.isRequired,
    connecting: PropTypes.bool.isRequired,
    messagesShown: PropTypes.bool.isRequired,
    callType: PropTypes.string.isRequired,
};

export default ChatArea;
