import React from 'react';
import ReactDOM from 'react-dom';

class MediaContainer extends React.Component {
    constructor(props) {
        super(props);
        this._localVideo = null;
        this._remoteVideo = null;
    }

    setLocalVideo(element) {
        if (!this._localVideo) {
            this._localVideo = element;
            this.props.setVideo('local', ReactDOM.findDOMNode(element));
        }
    }

    setRemoteVideo(element) {
        if (!this._remoteVideo) {
            this._remoteVideo = element;
            this.props.setVideo('remote', ReactDOM.findDOMNode(element));
        }
    }

    render() {
        const {connecting, callType, mutedVideo, mutedAudio} = this.props;
        return (
            <React.Fragment>
                {callType === 'video'
                    ? <React.Fragment>
                        <video className={`remote-video${(connecting || mutedVideo) ? ' muted' : ''}`} id="remoteVideo" ref={this.setRemoteVideo.bind(this)} muted={mutedAudio} autoPlay />
                        <video className={`local-video${(connecting || mutedVideo) ? ' muted' : ''}`} id="localVideo" muted autoPlay
                               ref={this.setLocalVideo.bind(this)}/>
                    </React.Fragment>
                    : null
                }
                {callType === 'audio'
                    ? <video className="remote-video muted" id="remoteVideo" muted={mutedAudio} ref={this.setRemoteVideo.bind(this)}/>
                    : null
                }
            </React.Fragment>
        );
    }
}

export default MediaContainer;