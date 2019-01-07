import React from 'react';
import PropTypes from 'prop-types';
import VolumeControl from './VolumeControl';
import './style.less';
import EndCall from "./EndCall";

const BottomBar = ({ finishTalk, connecting, ...props }) => (
  <div className="talker-bottom">
    {!connecting ? <VolumeControl {...props} /> : null }
    <div className="talker-call-menu-bottom">
      <EndCall finishTalk={finishTalk} connecting={connecting}/>
    </div>
  </div>
);

BottomBar.propTypes = {
    finishTalk: PropTypes.func.isRequired,
    connecting: PropTypes.bool.isRequired,
};

export default BottomBar;
