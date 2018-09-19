import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Tooltip, Popconfirm } from 'antd';
import VolumeControl from './VolumeControl';
import './style.less';

const BottomBar = ({ finishTalk, ...props }) => (
  <div className="talker-bottom">
    <VolumeControl {...props} />
    <div className="talker-call-menu-bottom">
      <Tooltip placement="bottom" title="Zakończ rozmowę">
        <Popconfirm title="Czy chcesz zakończyć rozmowę?" onConfirm={finishTalk} okText="Tak" cancelText="Nie">
          <Button className="end-call">
            <Icon type="phone" className="end-call-icon" />
          </Button>
        </Popconfirm>
      </Tooltip>
    </div>
  </div>
);

BottomBar.propTypes = {
    finishTalk: PropTypes.func.isRequired,
};

export default BottomBar;
