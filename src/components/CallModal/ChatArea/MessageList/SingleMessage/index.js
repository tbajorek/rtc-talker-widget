import React from 'react';
import PropTypes from 'prop-types';
import {  } from 'antd';
import MessageAvatar from './MessageAvatar';
import './style.less';

const SingleMessage = ({currentUser, author, content, date}) => (
    <div className="single-message">
        <div className="main">
            <MessageAvatar user={author} />
            <div className={`message-content ${currentUser.id === author.id ? 'outgoing' : 'incoming'}`}>{content}</div>
        </div>
        <div className="footer">
            <div className="menu-filler" />
            <div className="message-date">{date}</div>
        </div>
    </div>
);

export default SingleMessage;
