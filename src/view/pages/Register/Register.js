import React, { useEffect, useState } from 'react';
import { signUp, signUpActions } from '../../../store/user/signUp';
import store from '../../../store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PageFrame from '../../../components/PageFrame';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import paths from '../../../configs/paths';
import Greeting from '../../../components/Dialog/Greeting';
import logoNubes3 from '../../../assets/logo.png';

const Register = ({ isDone, errMessage }) => {
  const history = useHistory();
  const [showGreeting, setShowGreeting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .matches(/^[^\s@]+@[^\s@]+$/, 'Invalid email format')
        .required('Required!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(32, 'Maximum 32 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_^])[A-Za-z\d@$!%*?&#_^]{8,32}$/,
          'Must contain at least One Uppercase, One Lowercase, One Number and one special case Character (8-32 characters)'
        )
        .required('Required!')
    }),
    onSubmit: (values) => {
      store.dispatch(
        signUp({
          password: values.password,
          email: values.email
        })
      );
    }
  });

  useEffect(() => {
    if (isDone) {
      store.dispatch(signUpActions.reset());
      setShowGreeting(true);
    }
    return () => {};
  }, [isDone]);

  const handleSignUpDone = () => {
    history.push(paths.BASE);
  };

  return (
    <PageFrame>
      <Greeting open={showGreeting} onClick={handleSignUpDone} />
      <div className="mx-auto flex items-center justify-center max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="max-w-md w-full space-y-8 bg-white">
          <div>
            <img className="mx-auto h-12 w-auto" src={logoNubes3} alt="Logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign Up NubeS3 Cloud
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={
                    formik.errors.email
                      ? 'mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-red-500 focus:z-10 sm:text-sm'
                      : 'mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  }
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email ? (
                  <div className="text-red-600 text-sm" role="alert">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={
                    formik.errors.password
                      ? 'mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-red-500 focus:z-10 sm:text-sm'
                      : 'mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  }
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password ? (
                  <div className="text-red-600 text-sm" role="alert">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
            <p className="text-red-500 my-3 text-center">{errMessage}</p>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p className="text-gray-500">
              By pressing the button above you will create a NubeS3 Cloud
              account and agree to our terms of service.
            </p>
          </div>
        </div>
      </div>
    </PageFrame>
  );
};

const mapStateToProps = (state) => {
  return {
    isDone: state.signUp.done,
    errMessage: state.signUp.err
  };
};

export default connect(mapStateToProps)(Register);
