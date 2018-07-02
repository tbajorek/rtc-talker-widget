import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FlowingButton from '../FlowingButton';
import InitModal from '../InitModal';
import CallModal from '../CallModal';
import RateModal from '../RateModal';
import { getWidgetState } from '../../reducers/widget';

import './style.less';

const mapStateToProps = state => ({
  widgetState: getWidgetState(state),
});

const mapDispatchToProps = {};

const Widget = (props) => {
  let content;

  switch (props.widgetState) {
    case 'init':
      content = <InitModal />;
      break;
    case 'call':
    case 'chat':
      content = <CallModal />;
      break;
    case 'rate':
      content = <RateModal />;
      break;
    default:
      content = null;
  }
  return (
    <div className="rtc-talker-widget">
      <FlowingButton />
      { content }
    </div>
  );
};

Widget.propTypes = {
  widgetState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
