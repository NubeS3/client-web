import React from 'react';
import { connect } from 'react-redux';
import AuthAppBar from './AuthAppBar';
import GeneralAppBar from './GeneralAppBar';

const AppBar = (props) => {
  if (props.isValidAuthentication) {
    return <AuthAppBar />;
  } else {
    return <GeneralAppBar />;
  }
};

const mapStateToProps = (state) => {
  const isValidAuthentication = state.authen.isValidAuthentication;
  return {
    isValidAuthentication
  };
};

export default connect(mapStateToProps)(AppBar);
