import React from 'react';

const AddApplicationKey = ({ open, onSubmit, onCancle }) => {
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-2xl py-6">
            Add Application Key
          </h1>
          <hr />
          <form>
            <div className="grid grid-cols-5 pl-16 pt-8 pr-6 pb-4 text-sm text-gray-500">
              <div className="col-span-2 my-2">
                <p>Name of Key:</p>
                <p className="text-xs">(keyName)</p>
              </div>
              <input className="col-span-3 h-8 my-2 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500" />
              <div className="col-span-2 my-2">
                <p>Allow access to Bucket(s):</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(bucketName)</p>
              </div>
              <select className="col-span-3 h-8 my-2 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500">
                <option>All</option>
                <option>Bucket 1</option>
                <option>Bucket 2</option>
              </select>
              <div className="col-span-2 my-2">
                <p>Type of Access:</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(capabilities)</p>
              </div>
              <div role="group" className="col-span-3 my-2">
                <input type="radio" defaultChecked />
                <label> Read and Write</label>
                <br />
                <input type="radio" />
                <label> Read Only</label>
                <br />
                <input type="radio" />
                <label> Write Only</label>
                <br />
              </div>
              <div className="col-span-2 my-2">
                <p>File name prefix:</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(namePrefix)</p>
              </div>
              <div className="col-span-3 my-2 flex flex-col justify-center items-center">
                <input className="w-full h-8 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500" />
                <p className="text-xs">
                  Allow access to file names that starts with this.
                </p>
              </div>
              <div className="col-span-2 my-2">
                <p>Duration (seconds):</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(validDurationSeconds)</p>
              </div>
              <div className="col-span-3 my-2 flex flex-col justify-center items-center">
                <input className="w-full h-8 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500" />
                <p className="text-xs">
                  Positive integer less than 1000 days (in seconds).
                </p>
              </div>
              <div className="flex col-span-5 my-2 justify-center items-center">
                <button className="rounded-sm py-2 px-24 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Create New Key
                </button>
              </div>
            </div>
          </form>
          <hr />
          <div className="flex justify-end w-full">
            <button
              className="rounded-sm m-4 py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onCancle}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddApplicationKey;
