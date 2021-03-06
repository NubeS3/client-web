import React from 'react';
import { useSnackbar } from 'react-simple-snackbar';

const MasterKeyCardCreated = ({ appKey }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const copyKeyToClipboard = (key) => {
    if (key) {
      navigator.clipboard.writeText(key);
      openSnackbar('Copied to clipboard');
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center max-w-4xl py-4 px-8 bg-gray-100 shadow rounded-sm w-full text-gray-600">
      <p className="mx-auto">
        <b>Success!</b> Your new application key has been created.{' '}
        <b>It will only appear here once.</b>
      </p>
      <div className="grid grid-cols-3">
        <div className="col-span-1 mt-3 ml-20">
          <p className="text-gray-500">keyID:</p>
        </div>
        <div className="col-span-2 mt-3">
          <p className="text-black" id="key-id">
            {appKey ? appKey.id : ''}
          </p>
        </div>
        <div className="col-span-1 mt-3 ml-20">
          <p className="text-gray-500">keyName:</p>
        </div>
        <div className="col-span-2 mt-3">
          <p className="text-black" id="key-name">
            {appKey ? appKey.name : ''}
          </p>
        </div>
        <div className="col-span-1 mt-3 ml-20">
          <p className="text-gray-500">applicationKey:</p>
        </div>
        <div className="col-span-2 mt-3">
          <p className="text-black" id="bucket-name">
            {appKey ? appKey.key : ''}
          </p>
        </div>
        <div />
        <div className="col-span-2 mt-3">
          <button
            onClick={() => copyKeyToClipboard(appKey?.key)}
            type="button"
            class="py-2 px-4 border border-gray-600 bg-gray-100 focus:outline-none hover:bg-gray-200 text-black transition ease-in duration-200 text-center text-base rounded-sm"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasterKeyCardCreated;
