import React from 'react';

const MultipleDownload = ({
  open,
  onCancel,
  numOfFiles,
  totalSize,
  onDownload
}) => {
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-2xl py-6">Download</h1>
          <hr />
          <div className="flex flex-row justify-center mt-10 mb-5">
            <p>You are downloading&nbsp;</p>
            <p>
              {numOfFiles} Files of {totalSize} bytes
            </p>
          </div>
          <div className="flex flex-row justify-center mt-5 mb-10">
            <button
              onClick={onDownload}
              className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              I'm Sure. Download Files!
            </button>
            <button
              className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MultipleDownload;
