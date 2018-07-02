import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import './style.less';

const Options = () => {
  const list = (
    <Menu onClick={(e) => { console.log(e); }}>
      <Menu.Item key="file">
        Wyślij plik
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown placement="topLeft" overlay={list} trigger={['click']}>
      <Button className="chat-options-button" icon="up" />
    </Dropdown>
  );
};

export default Options;
