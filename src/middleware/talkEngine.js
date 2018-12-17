import {notification} from "antd";
import TbRtcClient from 'tbrtc-client/src/modules/main/TbRtcClient';
import {User as UserModel} from 'tbrtc-common/model/User';
import {
    END_CALL,
    endCall,
    rejectedCall,
    SET_CONNECTING,
    setConnecting,
    setInitializingCall
} from "../actions/widget/call";
import {CHOOSE_USER_SUCCESS, clearUsersList} from "../actions/availability";
import {getReceiver, getUser} from "../reducers/users";
import {setUserId} from "../actions/users";
import uuidv4 from 'uuid/v4';
import {getCallType, isConnecting} from "../reducers/widget/call";
import {setState} from "../actions/widget";
import Messages from "../utilities/Messages";
import {
    BREAK_REQUEST,
    FINISH_TALK, REQUEST_BREAK,
    SET_FILE_INPUT,
    SET_SESSION_ID,
    SET_VIDEO,
    setActiveTalk,
    setSessionId,
    START_SELECTING_FILES
} from "../actions/talk";
import {addMessageToList} from "../actions/message";
import {getSessionId, isFinishing} from "../reducers/talk";
import { updateFileNotification } from '../utilities/fileNotification';
import {getWidgetState} from "../reducers/widget";
import {loadConfig, reloadConfig} from "../actions/config";

let tbRtcClient = null;

const initializeTbRTC = (store, tbRtc) => {
    tbRtc.isConnected(() => {
        const state = store.getState();
        tbRtc.sendDataToUser({
            task: "session.create.request",
            type: getCallType(state)
        }, getReceiver(state).id);
    });

    tbRtc.isUserCommunication((data) => {
        if(data.details.task === 'session.join.ask') {
            store.dispatch(setSessionId(data.details.sessionId));
        }
    });
    tbRtc.isJoined((session) => {
        store.dispatch(setConnecting(false));
    });

    tbRtcClient.isRequestStopped(() => {
        store.dispatch(rejectedCall());
        Messages.warning("Próba komunikacji", "Próba połączenia się została zatrzymana");
    });
    tbRtcClient.isNewChatMessage((message) => {
        store.dispatch(addMessageToList(message.user.id, message.content, message.date));
    });
    tbRtc.isFileTransferStart(data => {
        updateFileNotification(data.channelId, data.type, data.file.info, null);
    });

    tbRtc.isFileTransferProgress(data => {
        updateFileNotification(data.channelId, data.type, data.file.info, data.stats);
    });

    tbRtc.isFileReceived(data => {
        data.file.download();
    });

    tbRtc.isFileSent(data => {
        //store.dispatch(finishTransferFile(data.channelId));
    });

    tbRtc.isSessionUserLeft(data => {
        if(isFinishing(store.getState())) {
            Messages.success("Sukces", `Rozmowa z użytkownikiem zakończyła się`);
            store.dispatch(endTalk());
        }
        Messages.error("Błąd", `Rozmowa została przerwana przez zdalnego użytkownika`);
        store.dispatch(endCall());
    });

    tbRtc.isRejectedMe((data) => {
        Messages.error("Błąd", `Rozmowa została odrzucona przez użytkownika ${data.decidedBy.name} ${data.decidedBy.surname}`);
        store.dispatch(rejectedCall());
    });

    tbRtc.isP2pStateChange((data) => {
        if(data.state === 'completed') {
            store.dispatch(setActiveTalk(true));
        } else if(!data.state || data.state === 'closed') {
            store.dispatch(setActiveTalk(false));
        }
    });

    tbRtc.isSessionClosed(() => {
        if(isFinishing(store.getState())) {
            Messages.success("Sukces", `Rozmowa z użytkownikiem zakończyła się`);
            store.dispatch(endCall());
        }
        tbRtc.disconnect();
    });
    tbRtc.isErrorMessage((data) => {
        const state = store.getState();
        if(isConnecting(state) && getWidgetState(state)==='call') {
            Messages.error("Błąd", `Nie znaleziono użytkownika, z którym chcesz się połączyć`);
        }
        store.dispatch(rejectedCall());
        store.dispatch(reloadConfig());
    });
};

export default store => next => (action) => {
    switch (action.type) {
        case CHOOSE_USER_SUCCESS:
            tbRtcClient = new TbRtcClient({
                signaling: {
                    server: process.env.SIGNALING_SERVER_URL,
                    debug: {
                        recvMessages: true
                    }
                },
                peerConfig: {
                    iceServers: [
                        {
                            "urls": [
                                "stun:stun.l.google.com:19302"
                            ]
                        }
                    ]
                },
                autoBindingMedia: false,
                debug: true
            });
            initializeTbRTC(store, tbRtcClient);
            tbRtcClient.isInitialized(() => {
                store.dispatch(setUserId(uuidv4()));
                store.dispatch(setConnecting(true));
                store.dispatch(setState('call'));
                store.dispatch(setInitializingCall(false));
                const state = store.getState();
                const user = getUser(state);
                const userModel = new UserModel(user.id, user.name, user.surname, user.email, user.avatar);
                tbRtcClient.setCurrentUser(userModel);
                let media;
                switch (getCallType(state)) {
                    case 'video':
                        media = {
                            video: true,
                            audio: true
                        };
                        break;
                    case 'audio':
                        media = {
                            video: false,
                            audio: true
                        };
                        break;
                    default:
                        media = {
                            video: false,
                            audio: false
                        };
                        break;
                }
                tbRtcClient.start(media);
            });
            window.tbRtc = tbRtcClient;
            break;
        case SET_SESSION_ID:
            const result = next(action);
            if(tbRtcClient !== null) {
                tbRtcClient.joinSession(action.payload.sessionId);
            }
            return result;
        case SET_VIDEO:
            if(tbRtcClient !== null) {
                switch (action.payload.type) {
                    case 'local':
                        tbRtcClient.domManager.setVideo('local', action.payload.element);
                        tbRtcClient.bindWithLocalVideo();
                        break;
                    case 'remote':
                        tbRtcClient.domManager.setVideo('remote', action.payload.element);
                        tbRtcClient.bindWithRemoteVideo();
                        break;
                }
            }
            break;
        case FINISH_TALK: {
            const result = next(action);
            if(tbRtcClient !== null) {
                const state = store.getState();
                tbRtc.sendDataToUser({
                    task: "session.close.request"
                }, getReceiver(state).id);
            }
            return result;
        }
        case SET_FILE_INPUT:
            if (tbRtcClient !== null) {
                tbRtcClient.addFileInput(action.payload.fileInput);
            }
            break;
        case START_SELECTING_FILES:
            if (tbRtcClient !== null) {
                const observedFile = tbRtcClient.getObservedFileInput(action.payload.fileId);
                if (observedFile) {
                    observedFile.openDialog();
                }
            }
            break;
        case BREAK_REQUEST:
            if (tbRtcClient !== null) {
                const sessionId = getSessionId(store.getState());
                if(sessionId !== null) {
                    tbRtcClient.stopRequest(sessionId);
                } else {
                    tbRtcClient.disconnect();
                }
            }
            break;
    }
    return next(action);
};