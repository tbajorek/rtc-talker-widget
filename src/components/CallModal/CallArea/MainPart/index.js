import React from 'react';
import PropTypes from 'prop-types';
import ReceiverAvatar from '../../../ReceiverAvatar';
import MediaContainer from './MediaContainer';

import './style.less';

const MainPart = ({
                      callType, mutedVideo, connecting, receiver, mutedAudio, setVideo
                  }) => (
    <div className="talker-centered-part">
        {connecting || mutedVideo || callType !== 'video' ?
            <ReceiverAvatar user={receiver} descriptionVisible={connecting} descriptionText="Łączenie..."/> : null}
            <MediaContainer connecting={connecting} callType={callType} mutedVideo={mutedVideo} mutedAudio={mutedAudio} setVideo={setVideo} />
    </div>
);

MainPart.propTypes = {
    callType: PropTypes.string.isRequired,
    mutedVideo: PropTypes.bool.isRequired,
    mutedAudio: PropTypes.bool.isRequired,
    connecting: PropTypes.bool.isRequired,
    receiver: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        avatar: PropTypes.string
    }),
    setVideo: PropTypes.func.isRequired,
};

export default MainPart;
