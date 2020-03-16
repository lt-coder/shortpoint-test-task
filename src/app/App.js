import React from 'react';
import { connect } from 'react-redux';
import routes from '../routes';
import { startSaga } from './rootSaga';
import Snackbars from '../components/SnackBars';
import { setClose } from '../containers/Notifications/reducer';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = (props) => (
  <React.Fragment>
    <CssBaseline />
    <Snackbars { ...props.notifications} setClose={props.setClose} />
      {routes}
  </React.Fragment>
)

const matchDispatchToProps = {
  setClose,
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const WrappedComponent = connect(mapStateToProps, matchDispatchToProps)(App);

export default () => {
  startSaga();
  return <WrappedComponent />
}