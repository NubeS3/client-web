import React from 'react';

const ItemDetail = ({ item, onClose }, ...props) => {
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-4xl w-auto px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <div className="flex flex-col items-center">
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full justify-center py-4">
                <h1 className="text-2xl">Details</h1>
              </div>
              <button
                className="self-end my-2 focus:outline-none"
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
            <div className="grid grid-cols-5 gap-2 w-10/12 my-12 mx-4 text-sm break-words">
              <p className="text-gray-400">Name:</p>
              <p className="col-span-4 w-full">
                {item.name ||
                  '143328610_1011054979404215_3522489706896266467_n.jpg'}
              </p>
              <p className="text-gray-400">Bucket Name:</p>
              <p className="col-span-4 w-full">
                {item.bucketName || 'Test-Nubes3-A'}
              </p>
              <p className="text-gray-400">Bucket Type:</p>
              <p className="col-span-4 w-full">
                {item.is_privated || 'Public'}
              </p>
              <p className="text-gray-400">Friendly URL:</p>
              <a
                href={item.friendlyUrl}
                className="col-span-4 w-full text-blue-400 hover:underline"
              >
                {item.friendlyUrl ||
                  'https;//f003.backblazeb2.com/file/Test-Nubes3-A/143328610_1011054979404215_3522489706896266467_njpg'}
              </a>
              <p className="text-gray-400">S3 URL:</p>
              <a
                href={item.s3Url}
                className="col-span-4 w-full text-blue-400 hover:underline"
              >
                {item.s3Url ||
                  'https://Test-Nubes3-A.53.eu-central-003.backblazeb2.com/143328610_1011054979404215_3522489706896266467_n.jpg'}
              </a>
              <p className="text-gray-400">Native URL:</p>
              <a
                href={item.nativeUrl}
                className="col-span-4 w-full text-blue-400 hover:underline"
              >
                {item.nativeUrl ||
                  'https://7003.backblazeb2.com/b2api/v1/b2_download_file_by_id/fileld=4_24e993f3c88e0d96273800713_f104b28cf38faSec1_d20210416_m164154_c003_v0312004_t0003'}
              </a>
              <p className="text-gray-400">Kind:</p>
              <p className="col-span-4 w-full">{item.kind || 'image/jpeg'}</p>
              <p className="text-gray-400">Size:</p>
              <p className="col-span-4 w-full">{item.size || '16.7 KB'}</p>
              <p className="text-gray-400">Uploaded:</p>
              <p className="col-span-4 w-full">
                {item.uploadedAt || '04/16/2021 23:41'}
              </p>
              <p className="text-gray-400">Fguid:</p>
              <p className="col-span-4 w-full">
                {item.fguid ||
                  '4_24e993f3c88e0d96273800713_f104628df38fa5ec1_d20210416_m164154_c003_v0312004_t0003'}
              </p>
              <p className="text-gray-400">Sha1:</p>
              <p className="col-span-4 w-full">
                {item.sha1 || 'cle5d0bf768a670626a37562095ac571052a75fe'}
              </p>
              <p className="text-gray-400">File Info:</p>
              <p className="col-span-4 w-full">
                {item.info ||
                  'src_last_modified_millis: 1611895044894 (01/29/2021 11:37)'}
              </p>
              <p className="text-gray-400">Encryption:</p>
              <p className="col-span-4 w-full">{item.encryption || 'none'}</p>
              <p className="text-gray-400">Object Lock:</p>
              <p className="col-span-4 w-full">{item.objLock || 'Disabled'}</p>
              <p className="text-gray-400">Legal Hold:</p>
              <div className="flex flex-row col-span-4 w-full">
                <p>{item.legalHold || 'Disabled'}</p>
                <button className="mx-2 px-2 rounded-sm text-indigo-400 border border-indigo-400 hover:border-indigo-700 hover:text-indigo-700">
                  {item.legalHold || 'Enable'}
                </button>
              </div>
              <div className="col-span-5 flex flex-row mt-10 justify-center">
                <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Download
                </button>
                <button
                  className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ItemDetail;
