import React from 'react';
import PropTypes from 'prop-types';

import CallAvatar from './CallAvatar';
import RemoteVideo from './RemoteVideo';
import { User } from '../../../../propTypes/User';
import './style.less';

const Index = ({ connecting, receiver }) => (
  <div className="talker-centered-part">
    {
            connecting ?
              <CallAvatar user={receiver} />
                :
              <RemoteVideo />
        }
    <video className="local-video" muted autoPlay />
  </div>
);

Index.propTypes = {
  connecting: PropTypes.bool.isRequired,
  receiver: User.propType.isRequired,
};

export default Index;
