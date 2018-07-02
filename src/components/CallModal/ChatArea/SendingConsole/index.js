import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Tooltip } from 'antd';
import Options from './Options';
import './style.less';

const { TextArea } = Input;

const SendingConsole = ({ writtenMessage, changeMessage, sendMessage }) => (
  <div className="sending-console">
    <Options />
    <TextArea value={writtenMessage} placeholder="Napisz wiadomość..." onChange={e => changeMessage(e.target.value)} autosize={{ minRows: 1, maxRows: 4 }} onPressEnter={sendMessage} />
    <div className="input-suffix">
      <Tooltip title="Wyślij wiadomość">
        <Button className="send-message-button" icon="right" onClick={sendMessage} />
      </Tooltip>
    </div>
  </div>
);

SendingConsole.propTypes = {
  writtenMessage: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default SendingConsole;
/*
<div className="input-prefix">
      <Dropdown overlay={<Emoticon />} trigger={['click']}>
        <Button icon="smile-o" />
      </Dropdown>
    </div>
 */
