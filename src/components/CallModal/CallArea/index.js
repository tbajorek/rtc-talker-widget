import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import MainPart from './MainPart';
import BottomBar from './BottomBar';

import './style.less';
import { User } from '../../../propTypes/User';

const CallArea = ({
  receiver, connecting, messagesShown, toggleMessageBox, volume, mutedAudio, mutedVideo, disabledAudio, changeVolume, changeMuteAudio, changeMuteVideo, endCall,
}) => (
  <div className="talker-call-area">
    <TopBar messagesShown={messagesShown} toggleMessageBox={toggleMessageBox} />
    <MainPart connecting={connecting} receiver={receiver} />
    <BottomBar volume={volume} mutedAudio={mutedAudio} mutedVideo={mutedVideo} disabledAudio={disabledAudio} changeVolume={changeVolume} changeMuteAudio={changeMuteAudio} changeMuteVideo={changeMuteVideo} endCallendCall={endCall} />
  </div>
);

CallArea.propTypes = {
  user: User.propType.isRequired,
  receiver: User.propType.isRequired,
  connecting: PropTypes.bool.isRequired,
  messagesShown: PropTypes.bool.isRequired,
  toggleMessageBox: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  disabledAudio: PropTypes.bool.isRequired,
  mutedVideo: PropTypes.bool.isRequired,
  mutedAudio: PropTypes.bool.isRequired,
  changeVolume: PropTypes.func.isRequired,
  changeMuteAudio: PropTypes.func.isRequired,
  changeMuteVideo: PropTypes.func.isRequired,
  endCall: PropTypes.func.isRequired,
};

export default CallArea;
