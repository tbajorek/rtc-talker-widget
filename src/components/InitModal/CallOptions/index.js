import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Button } from 'antd';
import './style.less';
import CallButton from './CallButton';

const ButtonGroup = Button.Group;

const CallButtons = ({ channels, chooseCallType }) => {
  const buttons = [];

  for (const channel of channels.toArray()) {
    if (channel !== false) {
      buttons.push(<CallButton channel={channel} key={channel} chooseCallType={chooseCallType} />);
    }
  }
  return (
    <ButtonGroup>
      { buttons }
    </ButtonGroup>
  );
};

CallButtons.propTypes = {
  channels: ImmutablePropTypes.list.isRequired,
  chooseCallType: PropTypes.func.isRequired,
};

export default CallButtons;
