import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Tooltip } from 'antd';
import VolumeControl from './VolumeControl';
import './style.less';

const BottomBar = ({ endCall, ...props }) => (
  <div className="talker-bottom">
    <VolumeControl {...props} />
    <div className="talker-call-menu-bottom">
      <Tooltip title="Zakończ rozmowę">
        <Button className="end-call" onClick={endCall}>
          <Icon type="phone" className="end-call-icon" />
        </Button>
      </Tooltip>
    </div>
  </div>
);

BottomBar.propTypes = {
  endCall: PropTypes.func.isRequired,
};

export default BottomBar;
