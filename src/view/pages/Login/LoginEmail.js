import React from 'react';
import { connect } from 'react-redux';
import { preValidateEmailLogin } from '../../../helpers/preValidateLoginData';
import paths from '../../../configs/paths';
import store from '../../../store';

import { loginEmail } from '../../../store/auth/auth';

const LoginEmail = (props) => {
  let [email, setEmail] = React.useState(props.loginEmail);
  let [err, setErr] = React.useState(' ');

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    let error = preValidateEmailLogin(email);
    if (error !== '') {
      return setErr(error);
    }
    setErr('');

    store.dispatch(loginEmail({ email: email }));
    props.toggler();
    // props.history.push(paths.LOGIN_PASSWORD);
  };

  return (
    <>
      {/* <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
        <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1> */}
      <form className="mb-6 pt-4 w-5/6">
        <div class="relative text-gray-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              class="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            type="text"
            autoFocus
            defaultValue={props.loginEmail}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr('');
            }}
            class="w-full py-2 text-sm text-grey-400 rounded-sm pl-10 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
            placeholder="Email address"
            autocomplete="off"
          />
        </div>
        <button
          onClick={handleEmailSubmit}
          className="relative w-full my-2 rounded-sm justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </form>
      <p className="text-red-500 mb-6">{err}</p>
      {/* </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  loginEmail: state.authen.loginEmail
});

export default connect(mapStateToProps)(LoginEmail);
