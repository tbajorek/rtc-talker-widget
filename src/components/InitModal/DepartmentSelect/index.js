import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';
import './style.less';

const FormItem = Form.Item;

const Option = Select.Option;

const DepartmentSelect = ({
  departments, selectedDepartment, changeDepartment, validation,
}) => {
  const options = Object.entries(departments).map(([id, name]) => <Option key={id} value={id}>{name}</Option>);
  const childProps = {
    showSearch: true,
    style: {
      width: '100%',
    },
    placeholder: 'Z kim chcesz porozmawiać?',
    optionFilterProp: 'children',
    onChange: changeDepartment,
    className: 'department-select',
    filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  };
  if (selectedDepartment !== null) {
    childProps.value = selectedDepartment;
  }
  const formItemProps = {};
  if (validation === false) {
    formItemProps.validateStatus = 'error';
    formItemProps.help = 'Wybierz departament, z którym chcesz się skontaktować';
  }
  return (
    <FormItem
      {...formItemProps}
    >
      <Select {...childProps}>
        {options}
      </Select>
    </FormItem>

  );
};

DepartmentSelect.defaultProps = {
  departments: {},
  selectedDepartment: null,
  validation: true,
};

DepartmentSelect.propTypes = {
  departments: PropTypes.object,
  selectedDepartment: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  changeDepartment: PropTypes.func.isRequired,
  validation: PropTypes.bool,
};

export default DepartmentSelect;
