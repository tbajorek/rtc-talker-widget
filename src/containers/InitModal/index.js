import { connect } from 'react-redux';
import InitModal from '../../components/InitModal';
import { setUsername, setDepartment } from '../../actions/widget/init';
import { setVisible } from '../../actions/widget';
import { getUserData } from '../../reducers/users';
import { setCallType, startCall } from '../../actions/widget/call';
import { getUsername, getAvatar, getDepartment, getUsernameValidation, getDepartmentValidation, isGivenUser } from '../../reducers/widget/init';
import { getChannels } from '../../reducers/channels';
import { getDepartments } from '../../reducers/departments';
import { isWidgetVisible } from '../../reducers/widget';

const mapStateToProps = state => ({
  userId: getUserData(state).get('id'),
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
  setCallType,
};

export default connect(mapStateToProps, mapDispatchToProps)(InitModal);
