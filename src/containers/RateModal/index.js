import { connect } from 'react-redux';
import RateModal from '../../components/RateModal';

import { isWidgetVisible } from '../../reducers/widget';
import { getUsers } from '../../reducers/users';
import { getRate, getComment } from '../../reducers/widget/rate';

import { setRate, setComment, sendRate, rejectRate } from '../../actions/widget/rate';


const mapStateToProps = state => ({
  visible: isWidgetVisible(state),
  users: getUsers(state),
  rate: getRate(state),
  comment: getComment(state),
});

const mapDispatchToProps = {
  setRate,
  setComment,
  sendRate,
  rejectRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(RateModal);
