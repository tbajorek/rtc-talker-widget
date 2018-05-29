import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Col } from 'antd';

import ChatArea from './ChatArea';
import CallArea from './CallArea';
import { User } from '../../propTypes/User';
import './style.less';

const CallModal = ({
  visible, user, receiver, onMinimize, messagesShown, toggleMessageBox, writtenMessage, changeMessage, messages, ...props
}) => (
  <Modal
    title={`Rozmowa z ${receiver.username}`}
    visible={visible}
    onCancel={onMinimize}
    footer={null}
    wrapClassName="talker-call-modal"
  >
    {
      visible ?
        <div className="talker-call-modal-body">
          <CallArea user={user} receiver={receiver} messagesShown={messagesShown} toggleMessageBox={toggleMessageBox} />
          { messagesShown ? <ChatArea user={user} receiver={receiver} writtenMessage={writtenMessage} changeMessage={changeMessage} messages={messages}/> : null }
        </div> : null
  }
  </Modal>
);

CallModal.defaultProps = {
  visible: false,
  receiver: {},
};

CallModal.propTypes = {
  visible: PropTypes.bool,
  user: User.propType.isRequired,
  receiver: User.propType,
  onMinimize: PropTypes.func.isRequired,
  toggleMessageBox: PropTypes.func.isRequired,
  messagesShown: PropTypes.bool.isRequired,
  writtenMessage: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
};

export default CallModal;
