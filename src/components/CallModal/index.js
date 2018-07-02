import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Modal } from 'antd';

import ChatArea from './ChatArea';
import CallArea from './CallArea';
import './style.less';

const CallModal = ({
  callType, visible, users, messagesShown, connecting, volume, writtenMessage, messages, mutedAudio, mutedVideo,
  setVolume, setMessagesVisibility, setWrittenMessage, setVisible, setMuteAudio, setMuteVideo, sendMessage, endCall,
}) => (
  <Modal
    className="rtc-talker-call-modal"
    title={`Rozmowa z ${users.get('receiver').get('username')}`}
    visible={visible}
    onCancel={() => setVisible(false)}
    footer={null}
    wrapClassName="talker-call-modal"
  >
    {
      visible ?
        <div className="talker-call-modal-body">
          { ['video', 'audio'].indexOf(callType) >= 0 ? <CallArea callType={callType} receiver={users.get('receiver')} messagesShown={messagesShown} toggleMessageBox={setMessagesVisibility} connecting={connecting} volume={volume} setVolume={setVolume} mutedAudio={mutedAudio} mutedVideo={mutedVideo} setMuteAudio={setMuteAudio} setMuteVideo={setMuteVideo} endCall={endCall} /> : null }
          { messagesShown || callType === 'chat' ? <ChatArea users={users} writtenMessage={writtenMessage} changeMessage={setWrittenMessage} messages={messages} sendMessage={sendMessage} /> : null }
        </div> : null
  }
  </Modal>
);

CallModal.propTypes = {
  callType: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  users: ImmutablePropTypes.contains({
    user: ImmutablePropTypes.map.isRequired,
    receiver: ImmutablePropTypes.map.isRequired,
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
  endCall: PropTypes.func.isRequired,
};

export default CallModal;
