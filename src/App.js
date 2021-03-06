import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import { verifyAuthentication } from './store/auth/auth';
import { verifyAdminAuthentication } from './store/auth/admin_auth';
import localStorageKeys from './configs/localStorageKeys';
import './index.css';
import paths from './configs/paths';
import Landing from './view/pages/Landing/Landing';
import Register from './view/pages/Register/Register';
import StorageLanding from './view/pages/Landing/StorageLanding';
import Login from './view/pages/Login/Login';
import BucketContainer from './view/pages/Storage/Buckets';
import AppKeyContainer from './view/pages/Storage/AppKey';
import BrowserContainer from './view/pages/Storage/Browser';
import ReportContainer from './view/pages/Storage/Reports';
import UserSettings from './view/pages/Storage/UserSettings';
import SnackbarProvider from 'react-simple-snackbar';

const App = (props) => {
  const mount = async () => {
    await store.dispatch(
      verifyAuthentication({
        authToken: localStorage.getItem(localStorageKeys.TOKEN)
      })
    );
    await store.dispatch(
      verifyAdminAuthentication({
        adminToken: localStorage.getItem(localStorageKeys.TOKEN_ADMIN)
      })
    );
  };

  useEffect(() => {
    mount();
  }, []);

  if (props.isValidating) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {/* <PageFrame> */}
      <SnackbarProvider>
        <Router basename="/">
          <Switch>
            <Route exact path={paths.BASE} component={Landing} />
            <Route exact path={paths.BASE_STORAGE} component={StorageLanding} />
            <Route exact path={paths.REGISTER} component={Register} />
            <Route exact path={paths.LOGIN} component={Login} />
            {/* <Route exact path={paths.TEST} component={Lifecycle} /> */}
            <Route exact path={paths.STORAGE} component={BucketContainer} />
            <Route
              exact
              path={paths.STORAGE_APPKEY}
              component={AppKeyContainer}
            />
            <Route path={paths.STORAGE_BROWSER} component={BrowserContainer} />
            <Route
              exact
              path={paths.STORAGE_REPORT}
              component={ReportContainer}
            />
            <Route
              exact
              path={paths.STORAGE_SETTINGS}
              component={UserSettings}
            />
            {/* <Route exact path={paths.BASE_ADMIN} component={AdminLanding} />
        <Route exact path={paths.REGISTER} component={SignUp} />
        
        <Route exact path={paths.OTP} component={ConfirmedOTP} />
        <Route exact path={paths.LOGIN_ADMIN} component={AdminLogin} />
        <GuardRoute exact path={paths.DASHBOARD} component={Dashboard} />
        <GuardRoute exact path={paths.STORAGE} component={Storage} />
        <AdminGuardRoute
        exact
        path={paths.DASHBOARD_ADMIN}
        component={AdminDashboard}
        />
        <AdminGuardRoute
        exact
        path={paths.USER_MANAGE}
        component={UserManageBoard}
        />
        <AdminGuardRoute
        exact
        path={paths.ADMIN_MANAGE}
        component={AdminManageBoard}
      /> */}
          </Switch>
        </Router>
      </SnackbarProvider>
      {/* </PageFrame> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  isValidating: state.authen.isValidating
});

export default connect(mapStateToProps)(App);
