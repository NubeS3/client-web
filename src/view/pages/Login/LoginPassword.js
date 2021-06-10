import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { preValidatePasswordLogin } from '../../../helpers/preValidateLoginData';
import paths from '../../../configs/paths';
import store from '../../../store';
import { changeLoginEmail, clearState, login } from '../../../store/auth/auth';
import { useHistory } from 'react-router';

const LoginPassword = ({ loginEmail, errMessage, isRejected, isFulfilled }) => {
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const history = useHistory();
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    let error = preValidatePasswordLogin({ password: pass });
    if (error) {
      return setErr(error);
    }
    setErr('');
    store.dispatch(login({ email: loginEmail, password: pass }));
  };

  useEffect(() => {
    if (isRejected) {
      setErr(errMessage.error);
      store.dispatch(clearState());
      return;
    }
    if (isFulfilled) {
      store.dispatch(clearState());
      history.push(paths.BASE);
    }
    return () => {
      // cleanup
    };
  }, [isRejected, isFulfilled]);
  const changeLogInEmail = () => {
    store.dispatch(changeLoginEmail());
    // props.history.push(paths.LOGIN_EMAIL);
  };

  return (
    <>
      {/* <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1> */}
      <div className="flex flex-col justify-center items-center">
        <p>{loginEmail}</p>
        <a href="" className="text-blue-600" onClick={changeLogInEmail}>
          {'(Change)'}
        </a>
      </div>
      <form onSubmit={handlePasswordSubmit} className="pt-4 w-5/6">
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            class="w-full py-2 text-sm text-white rounded-sm pl-10 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
            placeholder="Password"
            autocomplete="off"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="relative w-full my-2 rounded-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>
      <p className="text-red-500 mt-6 text-center">{err}</p>
      <a href="#" className="text-blue-600 py-6">
        Forgot Password?
      </a>
      {/* </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.authen.err);
  return {
    errMessage: state.authen.err,
    loginEmail: state.authen.loginEmail,
    isLoggingIn: state.authen.isLoggingIn,
    isFulfilled: state.authen.isFulfilled,
    isRejected: state.authen.isRejected
  };
};

export default connect(mapStateToProps)(LoginPassword);
