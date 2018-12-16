import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';

const CallButton = ({ channel, chooseCallType }) => {
  const getOptions = (name) => {
    switch (name) {
      case 'video':
        return {
          icon: 'video-camera',
          color: '#AFEEEE',
          text: 'Rozmowa wideo',
        };
      case 'audio':
        return {
          icon: 'phone',
          color: '#98FB98',
          text: 'Rozmowa audio',
        };
      case 'chat':
        return {
          icon: 'message',
          color: '#F0E68C',
          text: 'Rozmowa tekstowa',
        };
      case 'mail':
        return {
          icon: 'mail',
          color: '#FFF8DC',
          text: 'Wiadomość e-mail',
        };
      default:
        return {
          icon: null,
          color: null,
          text: null,
        };
    }
  };

  const options = getOptions(channel);
  return (
    options.icon ?
      <Tooltip placement="top" title={options.text}>
        <Button
          name={channel}
          type="default"
          size="large"
          shape="circle"
          style={{ backgroundColor: options.color }}
          icon={options.icon}
          onClick={(e) => {
                        chooseCallType(e.target.name);
                    }}
        />
      </Tooltip>
      : null);
};


export default CallButton;
