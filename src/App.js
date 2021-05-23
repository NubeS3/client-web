import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import { verifyAuthentication } from './store/auth/auth';
import { verifyAdminAuthentication } from './store/auth/admin_auth';
import localStorageKeys from './configs/localStorageKeys';
// import GuardRoute from './views/routes/GuardRoute';
// import Dashboard from './views/pages/Dashboard/Dashboard';
// import Storage from './views/pages/Storage/Storage';
// import SignUp from './views/pages/Register/Register';
// import SignIn from './views/pages/Login/Login';
// import paths from './configs/paths';
// import ConfirmedOTP from './views/pages/Otp/Otp';
// import AdminLogin from './views/pages/Admin/AdminLogin';
// import AdminDashboard from './views/pages/Admin/AdminDashboard';
// import UserManageBoard from './views/pages/Admin/UserManage';
// import AdminManageBoard from './views/pages/Admin/AdminManage';
// import AdminLanding from './views/pages/AdminLanding/Landing';
// import AdminGuardRoute from './views/routes/AdminGuardRoute';
import './index.css';
import paths from './configs/paths';
import Landing from './view/pages/Landing/Landing';
import Register from './view/pages/Register/Register';
import LoginEmail from './view/pages/Login/LoginEmail';
import LoginPassword from './view/pages/Login/LoginPassword';
import GeneralAppBar from './components/Header/GeneralAppBar';
import Greeting from './components/Dialog/Greeting';
import PageFrame from './components/PageFrame';
import StorageLanding from './view/pages/Landing/StorageLanding';
import Login from './view/pages/Login/Login';
import CreateBucket from './components/Dialog/Bucket/CreateBucket';
import CreateBucketButton from './components/CreateBucketButton';
import BucketCard from './components/BucketCard/BucketCard';
import Storage from './view/pages/Storage/Storage';
import BucketContainer from './view/pages/Storage/Buckets';
import AppKeyContainer from './view/pages/Storage/AppKey';

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
      <PageFrame>
        <Router basename="/">
          <Switch>
            <Route exact path={paths.BASE} component={Landing} />
            <Route exact path={paths.BASE_STORAGE} component={StorageLanding} />
            <Route exact path={paths.REGISTER} component={Register} />
            <Route exact path={paths.LOGIN} component={Login} />
            <Route exact path={paths.TEST} component={CreateBucketButton} />
            <Route exact path={paths.STORAGE} component={Storage} />
            <Route exact path={paths.STORAGE} component={BucketContainer} />
            <Route
              exact
              path={paths.STORAGE_APPKEY}
              component={AppKeyContainer}
            />
            <Route
              exact
              path={paths.STORAGE_BROWSER}
              component={AppKeyContainer}
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
      </PageFrame>
    </>
  );
};

const mapStateToProps = (state) => ({
  isValidating: state.authen.isValidating
});

export default connect(mapStateToProps)(App);
