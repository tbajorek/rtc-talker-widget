import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Modal, Rate, Input, Button } from 'antd';
import ReceiverAvatar from '../ReceiverAvatar';

import './style.less';

const { TextArea } = Input;

const RateModal = ({
  visible, users, rate, comment, setRate, setComment, sendRate, rejectRate,
}) => (
  <Modal
    className="rtc-talker-rate-modal"
    title="Oceń rozmowę"
    visible={visible}
    footer={
      <div>
        <Button type="default" onClick={rejectRate}>Nie oceniaj</Button>
        <Button disabled={!rate} type="primary" onClick={() => sendRate(users.getIn(['user', 'id']), users.getIn(['receiver', 'id']), rate, comment)}>Oceń</Button>
      </div>
    }
  >
    <ReceiverAvatar user={users.get('receiver')} descriptionVisible descriptionText={users.get('receiver').get('username')} />
    <Rate allowHalf defaultValue={rate} onChange={setRate} />
    <TextArea placeholder="Oceń rozmówcę" autosize value={comment} onChange={e => setComment(e.target.value)} />
  </Modal>
);

RateModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  users: ImmutablePropTypes.map.isRequired,
  rate: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  setRate: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  sendRate: PropTypes.func.isRequired,
  rejectRate: PropTypes.func.isRequired,
};

export default RateModal;
