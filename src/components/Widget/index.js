import React, { Component } from 'react';
import FlowingButton from '../FlowingButton';
import InitModal from '../InitModal';
import CallModal from '../CallModal';
const uuidv4 = require('uuid/v4');

class Widget extends Component {
  constructor(props) {
    super(props);
    const receiver = this.chooseReceiver();
    this.state = {
      username: this.props.config.user.username,
      user: this.props.config.user,
      initVisible: false,
      callVisible: false,
      department: this.props.config.department,
      validation: {
        username: true,
        department: true
      },
      widgetState: 'init',//@TODO call
      callType: null,
      notifyNumber: 2,
      receiver,
        connecting: false,
        volume: 50,
        messagesShown: true,//@TODO
        writtenMessage: '',
        messages: [
            {
                author: this.props.config.user,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: '25-05-2018 8:25:56',
            },
            {
                author: this.props.config.user,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: '25-05-2018 8:25:56',
            },
            {
                author: receiver,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: '25-05-2018 8:25:56',
            },
            {
                author: this.props.config.user,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: '25-05-2018 8:25:56',
            }
        ]
    };
  }

  onToggleModal = () => {
    const newState = this.state.widgetState === 'init' ?
      {initVisible: !this.state.initVisible} :
      {callVisible: !this.state.callVisible};
    this.setState(newState);
  };

  onChangeUsername = (username) => {
    const newState = {
      username,
      department: this.state.department
    };
    if(this.state.validation.username === false) {
      const newValidation = this.validateData(newState);
      newState.validation = {
          ...this.state.validation,
          username: newValidation.username
      };
    }
    this.setState(newState);
  };

  onClearUsername = () => {
    this.setState({
      username: ''
    });
  };

  onChangeDepartment = (department) => {
      const newState = {
          username: this.state.username,
          department,
      };
      if(this.state.validation.department === false) {
          const newValidation = this.validateData(newState);
          newState.validation = {
              ...this.state.validation,
              department: newValidation.department
          };
      }
      this.setState(newState);
  };

  validateData = (state = this.state) => {
      const validation = {...this.state.validation};
      validation.username = (!!state.username && state.username.length !== 0 && state.username.trim().length !== 0);
      validation.department = state.department !== null;
      return validation;
  };

  chooseReceiver = () => {
      return {
          id: uuidv4(),
          username: 'Jacob Freeman',
          avatar: 'https://ictatnhs.files.wordpress.com/2010/01/my-avatar.jpg',
          departmentId: 15
      };
  };

  onChooseCallType = (type) => {
      this.setState({validation: this.validateData()}, () => {
          if(this.state.validation.username && this.state.validation.department) {
              this.setState({
                  user: {
                      id: this.props.config.user.id,
                      username: this.state.username,
                      avatar: this.props.config.user.avatar,
                  },
                  widgetState: 'call',
                  initVisible: false,
                  callVisible: true,
                  callType: type,
                  receiver: this.chooseReceiver(),
              });
          }
      });
  };

  onMinimize = () => {
      this.onToggleModal();
  };

  onChangeVolume = (volume) => {
      this.setState({
          onChangeVolume
      });
  };

  onToggleMessageBox = () => {
      this.setState({
          messagesShown: !this.state.messagesShown,
      });
  };

    onChangeWrittenMessage = (writtenMessage) => {
        this.setState({
            writtenMessage,
        });
    };

  render() {
    return (
      <div className="rtc-talker-widget">
        <FlowingButton icon="solution" notifyNumber={this.state.notifyNumber} shape="circle" onClick={this.onToggleModal} />
        <InitModal
          changeUsername={this.onChangeUsername}
          clearUsername={this.onClearUsername}
          user={this.props.config.user}
          username={this.state.username}
          visible={this.state.initVisible}
          channels={this.props.config.channels}
          chooseCallType={this.onChooseCallType}
          cancelCall={this.onToggleModal}
          departments={this.props.config.departments}
          selectedDepartment={this.state.department}
          changeDepartment={this.onChangeDepartment}
          validation={this.state.validation}
        />
        <CallModal
            visible={this.state.callVisible}
            callType={this.state.type}
            user={this.state.user}
            receiver={this.state.receiver}
            onMinimize={this.onMinimize}
            messagesShown={this.state.messagesShown}
            toggleMessageBox={this.onToggleMessageBox}
            writtenMessage={this.state.writtenMessage}
            changeMessage={this.onChangeWrittenMessage}
            messages={this.state.messages}
        />
      </div>
    );
  }
}

export default Widget;
