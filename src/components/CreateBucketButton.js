import React from 'react';

const CreateBucketButton = ({ onButtonClick }) => {
  return (
    <div className="m-2">
      <button
        onClick={onButtonClick}
        className="flex w-full py-2 px-2 text-blue-500 items-center justify-center bg-white border border-gray-300 focus:outline-none hover:border-indigo-700"
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
    </div>
  );
};

export default CreateBucketButton;
