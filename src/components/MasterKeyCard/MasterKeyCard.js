import React from 'react';
import GenerateMasterKeyCard from '../Dialog/GenerateMasterKeyCard/GenerateMasterKeyCard';
import MasterKeyCardCreated from './MasterKeyCardCreated';

const MasterKeyCard = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [showCard, setShowCard] = React.useState(false);
  return (
    <div className="flex flex-col justify-center">
      <p className="w-full max-w-4xl my-2 mx-2">Master Application Key</p>
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
          <div className="col-span-2 mt-6">
            <button
              type="button"
              class="rounded-sm my-2 py-2 px-4 w-full border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpenDialog(true)}
            >
              Generate New Master Application Key
            </button>
            {openDialog && (
              <GenerateMasterKeyCard
                open={openDialog}
                onSubmit={() => {
                  setOpenDialog(false);
                  setShowCard(true);
                }}
                onCancel={() => setOpenDialog(false)}
              />
            )}
          </div>
          <div />
          <div className="col-span-2">
            <p className="text-gray-500">
              <b>Warning:</b> Generating a new key will cancel the old key.
            </p>
          </div>
        </div>
      </div>
      <br />
      {showCard && <MasterKeyCardCreated />}
    </div>
  );
};

export default MasterKeyCard;
