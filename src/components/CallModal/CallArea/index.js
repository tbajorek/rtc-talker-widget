import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TopBar from './TopBar';
import MainPart from './MainPart';
import BottomBar from './BottomBar';

import './style.less';
import {finishTalk} from "../../../actions/talk";

const CallArea = ({
                      callType, receiver, connecting, activeTalk, messagesShown, toggleMessageBox, volume, mutedAudio, mutedVideo,
                      setVolume, setMuteAudio, setMuteVideo, finishTalk, setVideo
                  }) => (
    <div className="talker-call-area">
        <TopBar messagesShown={messagesShown} toggleMessageBox={toggleMessageBox} connecting={connecting}/>
        <MainPart callType={callType} connecting={connecting} mutedVideo={mutedVideo} receiver={receiver} mutedAudio={mutedAudio} setVideo={setVideo} />
        <BottomBar callType={callType} volume={volume} mutedAudio={mutedAudio} mutedVideo={mutedVideo}
                   changeVolume={setVolume} changeMuteAudio={setMuteAudio} changeMuteVideo={setMuteVideo}
                   finishTalk={() => finishTalk(activeTalk)}/>
    </div>
);

CallArea.propTypes = {
    callType: PropTypes.string.isRequired,
    receiver: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        avatar: PropTypes.string
    }),
    connecting: PropTypes.bool.isRequired,
    activeTalk: PropTypes.bool.isRequired,
    messagesShown: PropTypes.bool.isRequired,
    toggleMessageBox: PropTypes.func.isRequired,
    volume: PropTypes.number.isRequired,
    mutedVideo: PropTypes.bool.isRequired,
    mutedAudio: PropTypes.bool.isRequired,
    setVolume: PropTypes.func.isRequired,
    setMuteAudio: PropTypes.func.isRequired,
    setMuteVideo: PropTypes.func.isRequired,
    finishTalk: PropTypes.func.isRequired,
    setVideo: PropTypes.func.isRequired,
};

export default CallArea;
