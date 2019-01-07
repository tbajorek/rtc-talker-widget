import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Modal} from 'antd';

import ChatArea from './ChatArea';
import CallArea from './CallArea';
import './style.less';
import {finishTalk} from "../../actions/talk";

const CallModal = ({
                       callType, visible, users, messagesShown, connecting, volume, writtenMessage, messages, mutedAudio, mutedVideo, unreadMessages,
                       setVolume, setMessagesVisibility, setWrittenMessage, setVisible, setMuteAudio, setMuteVideo, sendMessage, finishTalk, setVideo,
                       setFileInput, startSelectingFiles
                   }) => (
    <Modal
        className="rtc-talker-call-modal"
        title={`Rozmowa z ${users.receiver.name} ${users.receiver.surname}`}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        wrapClassName="talker-call-modal"
    >
        <div className={`talker-call-modal-body${visible ? '' : ' hidden'}`}>
            {['video', 'audio'].indexOf(callType) >= 0 || connecting ?
                <CallArea callType={callType} receiver={users.receiver} messagesShown={messagesShown} unreadMessages={unreadMessages}
                          toggleMessageBox={setMessagesVisibility} connecting={connecting} volume={volume}
                          setVolume={setVolume} mutedAudio={mutedAudio} mutedVideo={mutedVideo}
                          setMuteAudio={setMuteAudio} setMuteVideo={setMuteVideo} finishTalk={finishTalk}
                          setVideo={setVideo}/> : null}
                <ChatArea connecting={connecting} messagesShown={messagesShown} callType={callType} users={users}
                          writtenMessage={writtenMessage} changeMessage={setWrittenMessage} messages={messages} finishTalk={finishTalk}
                          sendMessage={sendMessage} setFileInput={setFileInput} startSelectingFiles={startSelectingFiles} />
        </div>
    </Modal>
);

CallModal.propTypes = {
    callType: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    users: PropTypes.shape({
        user: PropTypes.object.isRequired,
        receiver: PropTypes.object.isRequired,
    }).isRequired,
    messagesShown: PropTypes.bool.isRequired,
    connecting: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    writtenMessage: PropTypes.string.isRequired,
    messages: ImmutablePropTypes.orderedSet.isRequired,
    mutedAudio: PropTypes.bool.isRequired,
    mutedVideo: PropTypes.bool.isRequired,
    setVolume: PropTypes.func.isRequired,
    setMessagesVisibility: PropTypes.func.isRequired,
    setWrittenMessage: PropTypes.func.isRequired,
    setVisible: PropTypes.func.isRequired,
    setMuteAudio: PropTypes.func.isRequired,
    setMuteVideo: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    finishTalk: PropTypes.func.isRequired,
    setVideo: PropTypes.func.isRequired,
    setFileInput: PropTypes.func.isRequired,
    startSelectingFiles: PropTypes.func.isRequired,
    unreadMessages: PropTypes.number.isRequired,
};

export default CallModal;
