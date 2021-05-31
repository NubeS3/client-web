import React from 'react';
import { ReactComponent as HistoryIcon } from '../../assets/history.svg';

const Lifecycle = ({ onCancel }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
      <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-3 bg-white shadow rounded-sm my-auto text-gray-600">
        <h1 className="w-full text-center text-2xl py-6">Lifecycle Settings</h1>
        <hr />
        <br />
        <div className="flex flex-row justify-center">
          <HistoryIcon style={{ height: 25, width: 25, paddingRight: 5 }} />
          <p>You can control how long to keep files in your B2 bucket -</p>
          <p>&nbsp;</p>
          <a className="text-indigo-400 hover:text-indigo-600" href="/">
            {' '}
            Learn more{' '}
          </a>
        </div>
        <form className="flex justify-center">
          <div className="m-5">
            {/* <div /> */}
            <div className="mb-40" role="group">
              <input
                type="radio"
                id="f-default"
                name="keepDefault"
                value={true}
                className="mb-3"
              />
              <label className="mb-3" htmlFor="f-default">
                {' '}
                Keep all versions of the files (default)
              </label>
              <br />
              <input
                type="radio"
                id="f-only"
                name="keepOnly"
                value={false}
                defaultChecked
                className="mb-3"
              />
              <label className="mb-3" htmlFor="f-only">
                {' '}
                Keep only the last version of the file
              </label>
              <br />
              <input
                type="radio"
                id="f-prior"
                name="keepPrior"
                value={true}
                className="mb-3"
              />
              <label className="mb-3" htmlFor="f-prior">
                {' '}
                Keep prior versions for this number of days:
                <span>&nbsp;&nbsp;</span>
                <input className="w-28 max-h-8 bg-gray-100 border border-gray-400 rounded-sm focus:outline-none focus:border-indigo-500" />
              </label>
              <br />
              <input
                type="radio"
                id="f-custom"
                name="keepCustom"
                value={true}
                className="mb-3"
              />
              <label className="mb-3" htmlFor="f-custom">
                {' '}
                Use custom lifecycle rules:
              </label>

              <br />
            </div>
            <div className="mt-10">
              <div className="flex flex-row justify-center">
                <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Update Bucket
                </button>
                <button
                  className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
              <br />
              <div className="flex flex-row justify-center">
                <p className="text-xs text-gray-400">
                  Change takes effect in approximately
                </p>
                <p>&nbsp;</p>
                <p className="text-xs text-gray-400 font-bold">10 minutes</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Lifecycle;
