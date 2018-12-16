import { connect } from 'react-redux';
import InitModal from '../../components/InitModal';
import { setUsername, setDepartment } from '../../actions/widget/init';
import { setVisible } from '../../actions/widget';
import { setCallType, startCall } from '../../actions/widget/call';
import { getUsername, getAvatar, getDepartment, getUsernameValidation, getDepartmentValidation, isGivenUser } from '../../reducers/widget/init';
import { getChannels } from '../../reducers/availability';
import { getDepartments } from '../../reducers/availability';
import { isWidgetVisible } from '../../reducers/widget';

const mapStateToProps = state => ({
  username: getUsername(state),
  avatar: getAvatar(state),
  visible: isWidgetVisible(state),
  channels: getChannels(state),
  selectedDepartment: getDepartment(state),
  departments: getDepartments(state),
  usernameValidation: getUsernameValidation(state),
  departmentValidation: getDepartmentValidation(state),
  isGivenUser: isGivenUser(state),
});

const mapDispatchToProps = {
  setUsername,
  setDepartment,
  setVisible,
  startCall,
};

export default connect(mapStateToProps, mapDispatchToProps)(InitModal);
