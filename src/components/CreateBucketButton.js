import React from 'react';
import CreateBucket from './Dialog/Bucket/CreateBucket';

const CreateBucketButton = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <div className="relative mx-2">
      <button
        className="flex w-full m-2 py-2 text-blue-500 items-center justify-center bg-white border border-gray-300 focus:outline-none hover:border-indigo-700"
        onClick={() => setOpenDialog(!openDialog)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Create a Bucket
      </button>
      {openDialog ? <CreateBucket openDialog={setOpenDialog} /> : null}
    </div>
  );
};

export default CreateBucketButton;
