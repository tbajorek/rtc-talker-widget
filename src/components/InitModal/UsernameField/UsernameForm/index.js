import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, Form } from 'antd';

const FormItem = Form.Item;

const UsernameForm = ({
  username, changeUsername, clearUsername, validation,
}) => {
  const childProps = {
    placeholder: 'Przedstaw się',
    prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
    suffix: username ? <Icon type="close-circle" onClick={clearUsername} style={{ cursor: 'pointer' }} /> : null,
    value: username,
    onChange: e => changeUsername(e.target.value),
    ref: node => (node !== null ? node.focus() : null),
  };
  const formItemProps = {};
  if (validation === false) {
    formItemProps.validateStatus = 'error';
    formItemProps.help = 'Podana nazwa użytkownika jest nieprawidłowa';
  }
  return (
    <FormItem
      {...formItemProps}
    >
      <Input {...childProps} />
    </FormItem>
  );
};

UsernameForm.defaultProps = {
  validation: true,
  username: null,
};

UsernameForm.propTypes = {
  username: PropTypes.string,
  changeUsername: PropTypes.func.isRequired,
  clearUsername: PropTypes.func.isRequired,
  validation: PropTypes.bool,
};

export default UsernameForm;
