import React from 'react';
import { connect } from 'react-redux';
import { preValidatePasswordLogin } from '../../../helpers/preValidateLoginData';
import paths from '../../../configs/paths';
import store from '../../../store';
import { login } from '../../../store/auth/auth';

const LoginPassword = (props) => {
  let [pass, setPass] = React.useState('');
  let [err, setErr] = React.useState(' ');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    console.log(props.loginEmail);

    let error = preValidatePasswordLogin(pass);
    if (error) {
      return setErr(error);
    }
    setErr(' ');

    store.dispatch(login({ email: props.loginEmail, password: pass }));

    props.history.push(paths.BASE);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1>
      <div className="flex flex-col justify-center items-center">
        <p>{props.loginEmail}</p>
        <a
          href=""
          className="text-blue-600"
          onClick={() => props.history.push(paths.LOGIN_EMAIL)}
        >
          {'(Change)'}
        </a>
      </div>
      <form method="POST" className="pt-4 w-5/6">
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
          />
        </div>
        <button
          type="submit"
          onClick={handlePasswordSubmit}
          className="relative w-full my-2 rounded-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>
      <p className="text-red-500 mt-6">{err}</p>
      <a href="#" className="text-blue-600 py-6">
        Forgot Password?
      </a>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginEmail: state.authen.loginEmail
});

export default connect(mapStateToProps)(LoginPassword);
