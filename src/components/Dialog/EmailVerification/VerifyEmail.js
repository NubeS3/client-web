import React, { useEffect } from 'react';
import store from '../../../store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { confirmOTP, resendOTP } from '../../../store/user/signUp';
import { useSnackbar } from 'react-simple-snackbar';
import { connect } from 'react-redux';

const VerifyEmail = ({ open, onCancel, email, errMessage }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleResendOTP = () => {
    store.dispatch(resendOTP({ email: email }));
    openSnackbar('Resent OTP!');
  };

  const formik = useFormik({
    initialValues: {
      otp: ''
    },
    validationSchema: Yup.object({
      otp: Yup.string().required('Required!')
    }),
    onSubmit: (values) => {
      store.dispatch(confirmOTP({ email: email, otp: values.otp }));
    }
  });

  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
          <h1 className="pt-6 pb-8 text-2xl text-center">Verify Your Email</h1>
          <hr className="w-11/12 pt-4 pb-12" />
          <div className="w-full">
            {/* <div class="flex flex-col relative text-gray-400 mb-2">
              <label className="text-gray-600">Current Password</label>
              <input
                type="password"
                name="q"
                class="w-2/3 py-2 text-sm text-white rounded-sm px-4 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                autocomplete="off"
              />
            </div> */}
            <div className="w-full flex items-end mb-12">
              <div class="flex flex-col relative text-gray-400 mr-2 w-3/5">
                <label className="text-gray-600">Email</label>
                <input
                  value={email}
                  disabled="true"
                  name="q"
                  class="py-2 text-sm text-gray-600 rounded-sm px-4 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                  autocomplete="off"
                />
              </div>
              <button
                type={'button'}
                onClick={handleResendOTP}
                className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Resend OTP
              </button>
            </div>
          </div>
          <p className="text-gray-500 mb-4">
            Enter the 8-digit OTP code sent to your email
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full mb-4 justify-center items-center"
          >
            <input
              type="text"
              name="otp"
              onChange={formik.handleChange}
              value={formik.values.otp}
              maxLength={8}
              class="w-full py-2 text-sm text-gray-600 rounded-sm px-4 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
              autocomplete="off"
            />
            <p className="text-red-500 my-3 text-center">{errMessage}</p>
            <div className="flex justify-center">
              <button
                type={'submit'}
                className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Verify
              </button>
              <button
                className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="flex flex-col w-11/12 text-gray-500 justify-center items-center mb-12">
            <p className="text-center">
              You will receive an email contain an OTP code to verify your
              account. The OTP code expires in 30 minutes.
            </p>
            <div className="flex">
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>
              <p className="mx-2">{'&'}</p>
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    errMessage: state.signUp.err,
    isVerified: state.signUp.isVerified
  };
};

export default connect(mapStateToProps)(VerifyEmail);
