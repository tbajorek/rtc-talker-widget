import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import UsernameField from './UsernameField';
import DepartmentSelect from './DepartmentSelect';
import CallOptions from './CallOptions';
import { User } from '../../propTypes/User';

const InitModal = ({
  user, username, visible, channels, cancelCall, chooseCallType, changeUsername, clearUsername, departments, selectedDepartment, changeDepartment, validation,
}) => (
  <Modal
    className="rtc-talker-init-modal"
    title="Rozpocznij rozmowę"
    visible={visible}
    onCancel={cancelCall}
    footer={<CallOptions channels={channels} chooseCallType={chooseCallType} />}
  >
    <UsernameField
      user={user}
      username={username}
      changeUsername={changeUsername}
      clearUsername={clearUsername}
      validation={validation.username}
    />
    {
        Object.keys(departments).length ?
          <DepartmentSelect
            departments={departments}
            selectedDepartment={selectedDepartment}
            changeDepartment={changeDepartment}
            validation={validation.department}
          />
        : null
      }
  </Modal>
);

InitModal.defaultProps = {
  visible: false,
  channels: ['email'],
  departments: {},
  selectedDepartment: null,
};

InitModal.propTypes = {
  user: User.propType,
  username: PropTypes.string,
  visible: PropTypes.bool,
  channels: PropTypes.array,
  cancelCall: PropTypes.func.isRequired,
  chooseCallType: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired,
  clearUsername: PropTypes.func.isRequired,
  departments: PropTypes.object,
  selectedDepartment: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  changeDepartment: PropTypes.func.isRequired,
  validation: PropTypes.shape({
    username: PropTypes.bool,
    department: PropTypes.bool,
  }),
};

export default InitModal;
