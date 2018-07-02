import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Modal } from 'antd';

import UsernameField from './UsernameField';
import DepartmentSelect from './DepartmentSelect';
import CallOptions from './CallOptions';

const InitModal = ({
  userId, username, avatar, visible, channels, selectedDepartment, departments, usernameValidation,
  departmentValidation, isGivenUser, setUsername, setDepartment, setVisible, startCall, setCallType,
}) => (
  <Modal
    className="rtc-talker-init-modal"
    title="Rozpocznij rozmowę"
    visible={visible}
    onCancel={() => setVisible(false)}
    footer={<CallOptions
      channels={channels}
      chooseCallType={(type) => {
        if (!isGivenUser) {
            startCall(type, username, selectedDepartment);
        } else {
          setCallType(type);
        }
    }}
    />}
  >
    <UsernameField
      username={username}
      avatar={avatar}
      changeUsername={setUsername}
      usernameValidation={usernameValidation}
      isGivenUser={isGivenUser}
    />
    {
          departments.size ?
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
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  selectedDepartment: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  channels: ImmutablePropTypes.list.isRequired,
  departments: ImmutablePropTypes.map.isRequired,
  usernameValidation: PropTypes.bool.isRequired,
  departmentValidation: PropTypes.bool.isRequired,
  isGivenUser: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  startCall: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setDepartment: PropTypes.func.isRequired,
  setCallType: PropTypes.func.isRequired,
};

export default InitModal;
