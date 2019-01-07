import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Badge} from 'antd';
import './style.less';

const FlowingButton = ({
                           icon, color, backgroundColor, showIndicator, shape, setVisible, isInitializing, availableDepartments
                       }) => (
    <React.Fragment>
        {availableDepartments ? <div className="rtc-talker-init-button">
            <Badge dot={showIndicator} onClick={() => setVisible(true)}>
                <Avatar style={{color, backgroundColor}} shape={shape} size={60}
                        icon={isInitializing ? 'loading' : icon}/>
            </Badge>
        </div> : null}
    </React.Fragment>
);

FlowingButton.defaultProps = {
    icon: 'solution',
    color: 'rgb(255, 239, 206)',
    backgroundColor: 'rgb(216, 68, 9)',
    shape: 'circle',
    notifyNumber: 0,
};

FlowingButton.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
    showIndicator: PropTypes.bool,
    setVisible: PropTypes.func.isRequired,
};

export default FlowingButton;
