import { bindActionCreators } from 'redux';
import {
  loginWatcher,
  logoutWatcher,
  signupWatcher,
  userInfoWatcher,
  userAccessWatcher,
  userRemoveWatcher,
} from './actionCreators';

export const mapStateToProps = state => ({
  userlogin: state.userlogin,
  toggle: state.toggle,
  token: state.token,
  userAdmin: state.userAdmin,
  userData: state.userData,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loginWatcher,
  logoutWatcher,
  userInfoWatcher,
  userAccessWatcher,
  signupWatcher,
  userRemoveWatcher,
}, dispatch);