import React from 'react';

const CreateFolder = ({ open, onCancel }) => {
  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-3xl py-6">New Folder</h1>
          <hr />
          <form className="p-8">
            <div className="flex flex-row w-full justify-center">
              <p>New Folder Name:</p>
              <div className="w-10" />
              <input className="py-1 w-1/3 text-sm text-gray-600 rounded-sm px-2 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500" />
            </div>
            <div className="h-8" />
            <div className="flex flex-row justify-center">
              <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Folder
              </button>
              <button
                className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateFolder;
