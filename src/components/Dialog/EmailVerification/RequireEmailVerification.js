import React from 'react';
import { useHistory } from 'react-router-dom';
import paths from '../../../configs/paths';

const RequiredEmailVerification = ({ open }) => {
  const history = useHistory();

  const onSettingClick = () => {
    history.push({
      pathname: paths.STORAGE_SETTINGS,
      search: '?showEmail=true'
    });
  };

  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
          <h1 className="pt-6 pb-8 text-2xl text-center">
            NubeS3 Requires Your Account To Have A Verified Email
          </h1>
          <hr className="w-11/12 py-4" />
          <p className="pb-6">
            Please go to your My Settings Page to verify your email.
          </p>
          <button
            onClick={onSettingClick}
            className="relative mb-8 my-2 rounded-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to My Settings
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default RequiredEmailVerification;
