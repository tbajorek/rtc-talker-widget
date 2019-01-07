import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import UsernameField from './UsernameField';
import DepartmentSelect from './DepartmentSelect';
import CallOptions from './CallOptions';

const InitModal = ({
  username, avatar, visible, channels, selectedDepartment, departments, usernameValidation,
  departmentValidation, isGivenUser, setUsername, setDepartment, setVisible, startCall
}) => (
  <Modal
    className="rtc-talker-init-modal"
    title="Rozpocznij rozmowę"
    visible={visible}
    onCancel={() => setVisible(false)}
    footer={channels.length ? <CallOptions
      channels={channels}
      chooseCallType={(type) => {
          startCall(type, username, selectedDepartment);
    }}
    /> : null}
  >
    <UsernameField
      username={username}
      avatar={avatar}
      changeUsername={setUsername}
      usernameValidation={usernameValidation}
      isGivenUser={isGivenUser}
    />
    {
          departments.length > 1 ?
            <DepartmentSelect
              departments={departments}
              selectedDepartment={selectedDepartment}
              changeDepartment={setDepartment}
              validation={departmentValidation}
            />
              : null
      }
  </Modal>
);

InitModal.defaultProps = {
  avatar: null,
};

InitModal.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  selectedDepartment: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  channels: PropTypes.array.isRequired,
  departments: PropTypes.array.isRequired,
  usernameValidation: PropTypes.bool.isRequired,
  departmentValidation: PropTypes.bool.isRequired,
  isGivenUser: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  startCall: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setDepartment: PropTypes.func.isRequired,
};

export default InitModal;
