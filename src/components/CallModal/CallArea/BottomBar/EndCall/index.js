import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Tooltip, Popconfirm } from 'antd';
import './style.less';

const EndCall = ({ finishTalk, connecting }) => (
    <Tooltip placement="bottom" title={`${connecting ? 'Przerwanie' : 'Zakończenie'} rozmowy`}>
        <Popconfirm title={`Czy chcesz ${connecting ? 'przerwać' : 'zakończyć'} rozmowę?`} onConfirm={finishTalk} okText="Tak" cancelText="Nie">
            <Button className="end-call" htmlType="button">
                <Icon type="phone" className="end-call-icon" />
            </Button>
        </Popconfirm>
    </Tooltip>
);

EndCall.propTypes = {
    finishTalk: PropTypes.func.isRequired,
    connecting: PropTypes.bool.isRequired,
};

export default EndCall;
