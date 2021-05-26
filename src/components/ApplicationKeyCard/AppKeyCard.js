import React from 'react';

const AppKeyCard = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="w-full max-w-4xl my-2 mx-2">Your Application Keys</p>
      <div className="flex flex-col mx-auto justify-center w-full max-w-4xl py-4 px-8 bg-white shadow rounded-sm text-gray-600">
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
          <div />
          <div className=" mt-6 justify-items-end">
            <span class="px-4 py-2  text-base rounded text-red-500 border border-red-500 undefined ">
              Delete Key
            </span>
          </div>
          <div />

          <div />
        </div>
      </div>

      <br />
      {
        // showCard
        //   && <MasterKeyCardCreated />
      }
    </div>
  );
};

export default AppKeyCard;
