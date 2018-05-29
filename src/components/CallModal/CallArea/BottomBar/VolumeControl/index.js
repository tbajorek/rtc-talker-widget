import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button, Slider } from 'antd';
import './style.less';

const VolumeControl = ({
  volume, mutedAudio, mutedVideo, disabledAudio, changeVolume, changeMuteAudio, changeMuteVideo,
}) => (
  <div className="talker-volume">
    <Tooltip title={`${mutedVideo ? 'Wyłącz' : 'Włącz'} wideo`}>
      <Button className={`video-button ${mutedVideo ? 'off' : 'on'}`} icon="eye-o" onClick={changeMuteVideo} />
    </Tooltip>
    <Tooltip title={`${mutedAudio ? 'Wyłącz' : 'Włącz'} audio`}>
      <Button disabled={disabledAudio} className={`volume-button ${mutedAudio ? 'off' : 'on'}`} icon="sound" onClick={changeMuteAudio} />
    </Tooltip>
    <Slider className="volume-slider" min={0} max={100} disabled={disabledAudio} onChange={changeVolume} value={volume} />
  </div>
);

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  disabledAudio: PropTypes.bool.isRequired,
  mutedVideo: PropTypes.bool.isRequired,
  mutedAudio: PropTypes.bool.isRequired,
  changeVolume: PropTypes.func.isRequired,
  changeMuteAudio: PropTypes.func.isRequired,
  changeMuteVideo: PropTypes.func.isRequired,
};

export default VolumeControl;
