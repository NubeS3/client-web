import React from 'react';
import CreateBucket from './Dialog/Bucket/CreateBucket';
import store from '../store';
import { connect } from 'react-redux';

const CreateBucketButton = ({ authToken }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div className="relative">
      <button
        className="flex w-full my-2 py-2 text-blue-500 items-center justify-center bg-white border border-gray-300 focus:outline-none hover:border-indigo-700"
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
      {openDialog && (
        <CreateBucket open={openDialog} onCancel={() => setOpenDialog(false)} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  return {
    authToken
  };
};
export default connect(mapStateToProps)(CreateBucketButton);
