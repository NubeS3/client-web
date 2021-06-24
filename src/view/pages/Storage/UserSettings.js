import React, { useEffect, useState } from 'react';
import StorageFrame from './StorageFrame';
import VerifyEmail from '../../../components/Dialog/EmailVerification/VerifyEmail';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';

const UserSettings = ({ userEmail, isVerified }) => {
  const history = useHistory();
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [showVerifyEmail, setShowVerifyEmail] = useState(
    history.location.search
  );

  useEffect(() => {
    if (isVerified) {
      setShowVerifyEmail(false);
      openSnackbar('Email Verified!');
    }
    return () => {};
  }, [isVerified]);

  return (
    <StorageFrame active="settings">
      <VerifyEmail
        email={userEmail}
        open={showVerifyEmail}
        onCancel={() => setShowVerifyEmail(false)}
      />
      <div className="flex flex-col w-full mx-auto">
        <p className="text-3xl text-gray-600">My Settings</p>
        <hr className="mt-3 mb-5" />
        <div className="flex flex-row">
          <div className="w-32 flex-none">
            <img
              width="30"
              height="30"
              src="https://secure.backblaze.com/pics/account_icon_email_red.gif"
            />
          </div>
          <div className="flex-grow">
            <p className="font-bold text-lg">Contact:</p>
            <label className="font-bold text-md text-gray-400">Email:</label>
            <span className="ml-2 text-gray-600">{userEmail}</span>
          </div>
          <div className="w-auto flex-none">
            <div className="mt-6">
              <a className="block text-blue-500 hover:underline" href="#">
                Change Email Address
              </a>
              <a href="#" className="block text-blue-500 hover:underline">
                Delete Account
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-5" />
        <div className="flex flex-grow">
          <div className="w-32 flex-none">
            <img
              width="30"
              height="30"
              src="https://secure.backblaze.com/pics/account_icon_password.gif  "
            />
          </div>
          <div className="flex-grow">
            <p className="font-bold text-lg">Security:</p>
            <label className="font-bold text-md text-gray-400">Password:</label>
            <span className="ml-2 text-gray-600">********</span>
          </div>
          <div className="flex-none w-auto">
            <div className="mt-7">
              <a className="block text-blue-500 hover:underline" href="#">
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.authen.loginEmail,
    isVerified: state.signUp.isVerified
  };
};

export default connect(mapStateToProps)(UserSettings);
