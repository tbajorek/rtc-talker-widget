import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TopBar from './TopBar';
import MainPart from './MainPart';
import BottomBar from './BottomBar';

import './style.less';

const CallArea = ({
  callType, receiver, connecting, messagesShown, toggleMessageBox, volume, mutedAudio, mutedVideo,
  setVolume, setMuteAudio, setMuteVideo, endCall,
}) => (
  <div className="talker-call-area">
    <TopBar messagesShown={messagesShown} toggleMessageBox={toggleMessageBox} connecting={connecting} />
    <MainPart callType={callType} connecting={connecting} mutedVideo={mutedVideo} receiver={receiver} />
    <BottomBar callType={callType} volume={volume} mutedAudio={mutedAudio} mutedVideo={mutedVideo} changeVolume={setVolume} changeMuteAudio={setMuteAudio} changeMuteVideo={setMuteVideo} endCall={() => endCall(connecting)} />
  </div>
);

CallArea.propTypes = {
  callType: PropTypes.string.isRequired,
  receiver: ImmutablePropTypes.map.isRequired,
  connecting: PropTypes.bool.isRequired,
  messagesShown: PropTypes.bool.isRequired,
  toggleMessageBox: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  mutedVideo: PropTypes.bool.isRequired,
  mutedAudio: PropTypes.bool.isRequired,
  setVolume: PropTypes.func.isRequired,
  setMuteAudio: PropTypes.func.isRequired,
  setMuteVideo: PropTypes.func.isRequired,
  endCall: PropTypes.func.isRequired,
};

export default CallArea;
