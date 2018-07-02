import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ReceiverAvatar from '../../../ReceiverAvatar';
import RemoteVideo from './RemoteVideo';
import './style.less';

const MainPart = ({
  callType, mutedVideo, connecting, receiver,
}) => (
  <div className="talker-centered-part">
    { connecting || mutedVideo || callType !== 'video' ? <ReceiverAvatar user={receiver} descriptionVisible={connecting} descriptionText="Łączenie..." /> : null }
    { !connecting && callType === 'video' && !mutedVideo ? <RemoteVideo /> : null }
    { callType === 'video' && !mutedVideo ? <video className="local-video" muted autoPlay /> : null }
  </div>
);

MainPart.propTypes = {
  callType: PropTypes.string.isRequired,
  mutedVideo: PropTypes.bool.isRequired,
  connecting: PropTypes.bool.isRequired,
  receiver: ImmutablePropTypes.map.isRequired,
};

export default MainPart;
