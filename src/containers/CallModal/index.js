import {connect} from 'react-redux';
import CallModal from '../../components/CallModal';

import {setVisible} from '../../actions/widget';
import {setWrittenMessage, setVolume, setMuteAudio, setMuteVideo} from '../../actions/widget/call';
import {sendMessage, setMessagesVisibility} from '../../actions/message';
import {setVideo, setFileInput, startSelectingFiles, finishTalk} from '../../actions/talk';

import {
    getCallType,
    isConnecting,
    getVolume,
    getWrittenMessage,
    isMutedAudio,
    isMutedVideo
} from '../../reducers/widget/call';
import {isWidgetVisible} from '../../reducers/widget';
import {getUsers} from '../../reducers/users';
import {getMessageList, getMessageVisibility} from '../../reducers/messages';
import {isActiveTalk} from "../../reducers/talk";

const mapStateToProps = state => ({
    callType: getCallType(state),
    visible: isWidgetVisible(state),
    users: getUsers(state),
    messagesShown: getMessageVisibility(state),
    connecting: isConnecting(state),
    volume: getVolume(state),
    writtenMessage: getWrittenMessage(state),
    messages: getMessageList(state),
    mutedAudio: isMutedAudio(state),
    mutedVideo: isMutedVideo(state),
    activeTalk: isActiveTalk(state)
});

const mapDispatchToProps = {
    setVolume,
    setMessagesVisibility,
    setWrittenMessage,
    setVisible,
    setMuteAudio,
    setMuteVideo,
    sendMessage,
    finishTalk,
    setVideo,
    setFileInput,
    startSelectingFiles
};

export default connect(mapStateToProps, mapDispatchToProps)(CallModal);
