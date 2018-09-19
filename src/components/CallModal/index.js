import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Modal} from 'antd';

import ChatArea from './ChatArea';
import CallArea from './CallArea';
import './style.less';
import {finishTalk} from "../../actions/talk";

const CallModal = ({
                       callType, visible, activeTalk, users, messagesShown, connecting, volume, writtenMessage, messages, mutedAudio, mutedVideo,
                       setVolume, setMessagesVisibility, setWrittenMessage, setVisible, setMuteAudio, setMuteVideo, sendMessage, finishTalk, breakRequest, setVideo,
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
        {
            visible ?
                <div className="talker-call-modal-body">
                    {['video', 'audio'].indexOf(callType) >= 0 ?
                        <CallArea callType={callType} receiver={users.receiver} messagesShown={messagesShown}
                                  toggleMessageBox={setMessagesVisibility} connecting={connecting} volume={volume}
                                  setVolume={setVolume} activeTalk={activeTalk} mutedAudio={mutedAudio} mutedVideo={mutedVideo}
                                  setMuteAudio={setMuteAudio} setMuteVideo={setMuteVideo} finishTalk={finishTalk}
                                  setVideo={setVideo}/> : null}
                    {messagesShown || callType === 'chat' ?
                        <ChatArea users={users} writtenMessage={writtenMessage} changeMessage={setWrittenMessage}
                                  messages={messages} sendMessage={sendMessage} setFileInput={setFileInput} startSelectingFiles={startSelectingFiles} /> : null}
                </div> : null
        }
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
    activeTalk: PropTypes.bool.isRequired,
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
};

export default CallModal;
