import React from 'react';
import AddApplicationKey from './Dialog/ApplicationKey';
import BucketSetting from './Dialog/Bucket/BucketSetting';

const CreateApplicationKeyButton = ({ bucketList, authToken }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <>
      <button
        className="flex w-full my-2 py-2 text-blue-500 items-center justify-center bg-white border border-gray-300 focus:outline-none hover:border-indigo-700"
        onClick={() => setOpenDialog(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
        Add a New Application Key
      </button>
      {openDialog && (
        <AddApplicationKey
          open={openDialog}
          onCancel={() => setOpenDialog(false)}
          bucketList={bucketList}
          authToken={authToken}
        />
      )}
    </>
  );
};

export default CreateApplicationKeyButton;
