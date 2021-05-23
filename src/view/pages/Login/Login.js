import React, { useState } from 'react';
import { connect } from 'react-redux';
import { preValidateEmailLogin } from '../../../helpers/preValidateLoginData';
import paths from '../../../configs/paths';
import store from '../../../store';

import LoginPassword from './LoginPassword';
import LoginEmail from './LoginEmail';

const Login = (props) => {
  const [toggleEmail, setToggleEmail] = useState(true);
  const emailToggler = () => {
    setToggleEmail(!toggleEmail);
  };
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1>
      {toggleEmail ? <LoginEmail toggler={emailToggler} /> : <LoginPassword />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginEmail: state.authen.loginEmail
});

export default connect(mapStateToProps)(Login);
