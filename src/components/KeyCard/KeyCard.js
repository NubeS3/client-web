import React from 'react';

const KeyCard = () => {
  return (
    <div className="flex flex-col mx-auto justify-center max-w-3xl py-2 px-2 pb-10 bg-gray-100">
      <p className="flex flex-col max-w-3xl py-4 px-8">
        Master Application Key
      </p>
      <div className="flex flex-col mx-auto justify-center max-w-3xl py-4 px-8 bg-white shadow rounded-sm my-auto text-gray-600">
        <div className="grid grid-cols-3">
          <div className="mt-4">
            <p className="text-gray-500">keyID:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="key-id">
              e9fc89087123
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">keyName:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="key-name">
              Master Application Key
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">bucketName:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="bucket-name">
              -
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">capabilities:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="capabilities">
              byPassGovernance, listKeys, writeKeys, deleteKeys, listBuckets,
              readBuckets, writeBuckets, deleteBuckets, readBucketEncryption,
              readBucketRetentions, writeBucketEncryption,
              writeBucketRetentions, listFiles, readFiles, shareFiles,
              writeFiles, deleteFiles, readFileRetentions, readFileLegalHolds,
              writeFileRetentions, writeFileLegalHolds
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">expiration:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="expiration">
              Never
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">namePrefix:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="name-prefix">
              (none)
            </p>
          </div>
          <div />
          <div className="col-span-2 mt-6">
            <button
              type="button"
              class="py-2 px-4  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Generate New Master Application Key
            </button>
          </div>
          <div />
          <div className="col-span-2">
            <p className="text-gray-500">
              <b>Warning:</b> Generating a new key will cancel the old key.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
