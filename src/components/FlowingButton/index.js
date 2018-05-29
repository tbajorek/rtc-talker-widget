import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Avatar, Badge } from 'antd';
import './style.less';

const FlowingButton = ({
  icon, color, backgroundColor, notifyNumber, shape, onClick,
}) => (
  <div className="rtc-talker-init-button">
    <Badge count={notifyNumber} onClick={onClick} >
      <Avatar style={{ color, backgroundColor }} shape={shape} icon={icon} size="large" />
    </Badge>
  </div>
);

FlowingButton.defaultProps = {
  icon: 'solution',
  color: 'rgb(255, 239, 206)',
  backgroundColor: 'rgb(216, 68, 9)',
  shape: 'circle',
  notifyNumber: 0,
};

FlowingButton.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'square']),
  notifyNumber: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default FlowingButton;
