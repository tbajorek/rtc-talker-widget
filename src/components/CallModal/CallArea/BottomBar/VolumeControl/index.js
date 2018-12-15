import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button, Slider } from 'antd';
import './style.less';

const VolumeControl = ({
  callType, volume, mutedAudio, mutedVideo, changeVolume, changeMuteAudio, changeMuteVideo,
}) => (
  <div className="talker-volume">
    { callType === 'video' ?
      <Tooltip title={`${mutedVideo ? 'Włącz' : 'Wyłącz'} wideo`}>
        <Button className={`video-button ${mutedVideo ? 'off' : 'on'}`} icon="eye-o" onClick={() => changeMuteVideo(!mutedVideo)} />
      </Tooltip>
        : null}
    <Tooltip title={`${mutedAudio ? 'Włącz' : 'Wyłącz'} audio`}>
      <Button className={`volume-button ${mutedAudio ? 'off' : 'on'}`} icon="sound" onClick={() => changeMuteAudio(!mutedAudio)} />
    </Tooltip>
    <Slider className="volume-slider" min={0} max={100} disabled={mutedAudio} onChange={changeVolume} value={volume} />
  </div>
);

VolumeControl.propTypes = {
  callType: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  mutedVideo: PropTypes.bool.isRequired,
  mutedAudio: PropTypes.bool.isRequired,
  changeVolume: PropTypes.func.isRequired,
  changeMuteAudio: PropTypes.func.isRequired,
  changeMuteVideo: PropTypes.func.isRequired,
};

export default VolumeControl;
