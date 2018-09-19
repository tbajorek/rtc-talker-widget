import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import {Input, Button, Tooltip} from 'antd';
import Options from './Options';
import './style.less';

const {TextArea} = Input;

class SendingConsole extends React.Component {
    constructor(props) {
        super(props);
        this._fileInput = null;
    }

    setFileInput(element) {
        if (!this._fileInput) {
            this._fileInput = element;
            this.props.setFileInput(ReactDOM.findDOMNode(element));
        }
    }

    render() {
        const {writtenMessage, changeMessage, sendMessage, startSelectingFiles} = this.props;
        return (
            <React.Fragment>
                <div className="sending-console">
                    <Options startSelectingFiles={() => startSelectingFiles('fileInput')}/>
                    <TextArea value={writtenMessage} placeholder="Napisz wiadomość..."
                              onChange={e => changeMessage(e.target.value)} autosize={{minRows: 1, maxRows: 4}}
                              onPressEnter={sendMessage}/>
                    <div className="input-suffix">
                        <Tooltip title="Wyślij wiadomość">
                            <Button className="send-message-button" icon="right" onClick={sendMessage}/>
                        </Tooltip>
                    </div>
                </div>
                <input id="fileInput" type="file" ref={this.setFileInput.bind(this)}/>
            </React.Fragment>
        );
    }
}

SendingConsole.propTypes = {
    writtenMessage: PropTypes.string.isRequired,
    changeMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    setFileInput: PropTypes.func.isRequired,
    startSelectingFiles: PropTypes.func.isRequired,
};

export default SendingConsole;