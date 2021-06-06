import React, { useState } from 'react';
import BucketSetting from '../Dialog/Bucket/BucketSetting';

const BucketCard = ({ item }) => {
  const [showBucketSettings, setShowBucketSettings] = useState(false);
  return (
    <div
      key={item.bucket.id}
      className="flex flex-col justify-center w-full max-w-4xl py-4 px-8 bg-white shadow rounded-sm text-gray-600 my-2"
    >
      {showBucketSettings ? <BucketSetting /> : null}
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mb-2 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <p className="text-gray-600 text-xl inline" id="bucket-name">
              {item.bucket.name || ''}
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <p className="text-gray-500">Created at:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="created-at">
                {item.bucket.created_at
                  ? new Date(item.bucket.created_at).toDateString()
                  : ''}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Bucket id:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="bucket-id">
                {item.bucket.id}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Type:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="type">
                {item.bucket.is_public ? 'Public' : 'Private'}
              </p>
            </div>
            <div>
              <p className="text-gray-500">File Lifecycle:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="file-life-cycle">
                Keep all versions
              </p>
            </div>
            <div>
              <p className="text-gray-500">Snapshots:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="snapshots">
                0
              </p>
            </div>
            <div>
              <p className="text-gray-500">Current File:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="current-file">
                {item.object_count}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Current Size:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="current-size">
                {item.size} KB
              </p>
            </div>
            <div>
              <p className="text-gray-500">Endpoint:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="endpoint">
                s3.eu-central-003.nubeS3.com
              </p>
            </div>
            <div>
              <p className="text-gray-500">Encryption:</p>
            </div>
            <div className="col-span-2">
              <p className="text-black" id="encryption">
                {item.bucket.is_encrypted ? 'Enable' : 'Disable'}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            id="btn-upload-download"
            className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload/Download
          </button>
          <div className="mt-20 text-blue-500">
            <div>
              <p
                href="#"
                className="hover:underline cursor-pointer"
                onClick={() => setShowBucketSettings(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mb-1 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Bucket Settings
              </p>
            </div>
            <div>
              <a href="#" className="hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-1 mb-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Lifecycle
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-1 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Object Lock:
              </a>
              <p className="inline ml-1 text-black font-normal">
                {item.bucket.is_object_lock ? 'Enable' : 'Disable'}
              </p>
            </div>
            <div>
              <a href="#" className="hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-1 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Make Full Buckets Snapshot
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketCard;
