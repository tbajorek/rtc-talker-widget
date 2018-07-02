import { connect } from 'react-redux';
import FlowingButton from '../../components/FlowingButton';
import { getIcon, getColor, getBackgroundColor, getShape, getNotifyNumber } from '../../reducers/widget/button';
import { setVisible } from '../../actions/widget';

const mapStateToProps = state => ({
  icon: getIcon(state),
  color: getColor(state),
  backgroundColor: getBackgroundColor(state),
  shape: getShape(state),
  notifyNumber: getNotifyNumber(state),
});

const mapDispatchToProps = {
  setVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowingButton);
