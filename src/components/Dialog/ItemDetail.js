import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { getFileDetail } from '../../store/userStorage/bucket';

import { downloadSingle } from '../../store/userStorage/download';

const ItemDetail = (
  { item, onClose, bucketId, authToken, breadCrumbStack, fileDetail },
  ...props
) => {
  useEffect(() => {
    let fullPath = `/${breadCrumbStack.join('/')}/${item.name}`;
    store.dispatch(
      getFileDetail({ authToken: authToken, full_path: fullPath })
    );
  }, []);

  const handleDownloadClick = () => {
    let fullPath = `/${breadCrumbStack.join('/')}/${item.name}`;
    store.dispatch(
      downloadSingle({
        full_path: fullPath,
        bucketId: bucketId,
        authToken: authToken,
        fileName: item.name
      })
    );
  };

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
                className="self-start my-2 focus:outline-none"
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
                {fileDetail.name ||
                  '143328610_1011054979404215_3522489706896266467_n.jpg'}
              </p>
              <p className="text-gray-400">Bucket ID:</p>
              <p className="col-span-4 w-full">
                {fileDetail.bucket_id || 'Test-Nubes3-A'}
              </p>
              <p className="text-gray-400">Bucket Type:</p>
              <p className="col-span-4 w-full">
                {fileDetail.is_privated || 'Public'}
              </p>
              <p className="text-gray-400">Friendly URL:</p>
              <a
                href={fileDetail.friendlyUrl}
                className="col-span-4 w-full text-blue-400 hover:underline"
              >
                {fileDetail.friendlyUrl || ''}
              </a>
              <p className="text-gray-400">S3 URL:</p>
              <a
                href={fileDetail.s3Url}
                className="col-span-4 w-full text-blue-400 hover:underline"
              >
                {fileDetail.s3Url || ''}
              </a>
              <p className="text-gray-400">Native URL:</p>
              <a
                href={fileDetail.nativeUrl}
                className="col-span-4 w-full text-blue-400 hover:underline"
              >
                {fileDetail.nativeUrl || ''}
              </a>
              <p className="text-gray-400">Kind:</p>
              <p className="col-span-4 w-full">
                {fileDetail.kind || 'image/jpeg'}
              </p>
              <p className="text-gray-400">Size:</p>
              <p className="col-span-4 w-full">{fileDetail.size || ''}</p>
              <p className="text-gray-400">Uploaded:</p>
              <p className="col-span-4 w-full">
                {fileDetail.upload_date
                  ? new Date(fileDetail.upload_date).toISOString()
                  : ''}
              </p>
              <p className="text-gray-400">Fguid:</p>
              <p className="col-span-4 w-full">{fileDetail.fid || ''}</p>
              <p className="text-gray-400">Sha1:</p>
              <p className="col-span-4 w-full">
                {fileDetail.sha1 || 'cle5d0bf768a670626a37562095ac571052a75fe'}
              </p>
              <p className="text-gray-400">File Info:</p>
              <p className="col-span-4 w-full">{fileDetail.info || ''}</p>
              <p className="text-gray-400">Encryption:</p>
              <p className="col-span-4 w-full">
                {fileDetail.encryption || 'none'}
              </p>
              <p className="text-gray-400">Object Lock:</p>
              <p className="col-span-4 w-full">
                {fileDetail.objLock || 'Disabled'}
              </p>
              <p className="text-gray-400">Legal Hold:</p>
              <div className="flex flex-row col-span-4 w-full">
                <p>{fileDetail.legalHold || 'Disabled'}</p>
                <button className="mx-2 px-2 rounded-sm text-indigo-400 border border-indigo-400 hover:border-indigo-700 hover:text-indigo-700">
                  {fileDetail.legalHold || 'Enable'}
                </button>
              </div>
              <div className="col-span-5 flex flex-row mt-10 justify-center">
                <button
                  className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleDownloadClick}
                >
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

const mapStateToProps = (state) => {
  const fileDetail = state.bucket.fileDetail;
  return { fileDetail };
};

export default connect(mapStateToProps)(ItemDetail);
