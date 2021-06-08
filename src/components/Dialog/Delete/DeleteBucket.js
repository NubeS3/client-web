import React from 'react';

const DeleteFile = ({ open, onClose, numOfFiles, totalSize }) => {
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-xl w-auto px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <div className="flex flex-col items-center">
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full justify-center py-4">
                <h1 className="text-2xl">Are you sure?</h1>
              </div>
              <button
                className="self-start my-2 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col my-6 justify-center items-center text-sm">
              <div className="flex">
                <p>You are deleting&nbsp;</p>
                <p>
                  {numOfFiles} File(s) {totalSize} KB
                </p>
              </div>
              <p>
                Note: Your bucket file and storage usage will show updated
                result within 24 hours.
              </p>
              <div className="h-10" />
              <div className="col-span-5 flex flex-row justify-center">
                <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
                  I'm Sure. Delete Files!
                </button>
                <button
                  className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteFile;
