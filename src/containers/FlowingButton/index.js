import { connect } from 'react-redux';
import FlowingButton from '../../components/FlowingButton';
import { getIcon, getColor, getBackgroundColor, getShape, isShownIndicator } from '../../reducers/widget/button';
import { setVisible } from '../../actions/widget';
import {isInitializing} from "../../reducers/widget/call";
import {getDepartments} from "../../reducers/availability";

const mapStateToProps = state => ({
  icon: getIcon(state),
  color: getColor(state),
  backgroundColor: getBackgroundColor(state),
  shape: getShape(state),
  showIndicator: isShownIndicator(state),
  isInitializing: isInitializing(state),
  availableDepartments: !!getDepartments(state).length
});

const mapDispatchToProps = {
  setVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowingButton);
