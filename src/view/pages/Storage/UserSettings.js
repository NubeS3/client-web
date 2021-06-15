import React from 'react';
import StorageFrame from './StorageFrame';

const UserSettings = () => {
  return (
    <StorageFrame active="settings">
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
            <span className="ml-2 text-gray-600">nguyenvana@gmail.com</span>
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

export default UserSettings;
