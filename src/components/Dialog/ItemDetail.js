import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { getFileDetail } from '../../store/userStorage/bucket';
import Spinner from '../Spinner';
import {
  downloadActions,
  downloadSingle
} from '../../store/userStorage/download';

const ItemDetail = (
  {
    item,
    bucket,
    onClose,
    bucketId,
    authToken,
    breadCrumbStack,
    fileDetail,
    downloadDone,
    downloadFailed
  },
  ...props
) => {
  const [isDownloading, setIsDownloading] = useState(false);
  useEffect(() => {
    if (downloadDone) {
      setIsDownloading(false);
      store.dispatch(downloadActions.clearDownloadState());
    } else if (downloadFailed) {
      setIsDownloading(false);
      store.dispatch(downloadActions.clearDownloadState());
    }
    return () => {};
  }, [downloadDone, downloadFailed]);

  useEffect(() => {
    let fullPath = `/${breadCrumbStack.join('/')}/${item.name}`;
    store.dispatch(
      getFileDetail({ authToken: authToken, full_path: fullPath })
    );
    console.log(bucket);
  }, []);

  const handleDownloadClick = () => {
    let fullPath = `/${breadCrumbStack.join('/')}/${item.name}`;
    setIsDownloading(true);
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
              <p className="col-span-4 w-full">{fileDetail.name || ''}</p>
              <p className="text-gray-400">Bucket ID:</p>
              <p className="col-span-4 w-full">{fileDetail.bucket_id || ''}</p>
              <p className="text-gray-400">Bucket Type:</p>
              <p className="col-span-4 w-full">
                {bucket.is_public ? 'Public' : 'Private'}
              </p>
              {/*<p className="text-gray-400">Friendly URL:</p>
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
              </a>*/}
              <p className="text-gray-400">Kind:</p>
              <p className="col-span-4 w-full">
                {fileDetail.content_type || 'image/jpeg'}
              </p>
              <p className="text-gray-400">Size:</p>
              <p className="col-span-4 w-full">{fileDetail.size || ''}</p>
              <p className="text-gray-400">Uploaded:</p>
              <p className="col-span-4 w-full">
                {fileDetail.upload_date
                  ? new Date(fileDetail.upload_date).toDateString()
                  : ''}
              </p>
              <p className="text-gray-400">Fguid:</p>
              <p className="col-span-4 w-full">{fileDetail.fid || ''}</p>
              <p className="text-gray-400">Sha1:</p>
              <p className="col-span-4 w-full">
                {fileDetail?.encrypt_data?.hash || 'none'}
              </p>
              <p className="text-gray-400">IV:</p>
              <p className="col-span-4 w-full">
                {fileDetail?.encrypt_data?.iv || 'none'}
              </p>
              <p className="text-gray-400">Encryption:</p>
              <p className="col-span-4 w-full">
                {fileDetail.is_encrypted ? 'True' : 'none'}
              </p>
              <p className="text-gray-400">Object Lock:</p>
              <p className="col-span-4 w-full">
                {fileDetail.objLock || 'Disabled'}
              </p>
              {isDownloading ? (
                <div className="col-span-5 flex flex-row mt-10 justify-center">
                  <Spinner />
                </div>
              ) : null}
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
  const downloadDone = state.download.downloadDone;
  const downloadFailed = state.download.downloadFailed;
  return { fileDetail, downloadDone, downloadFailed };
};

export default connect(mapStateToProps)(ItemDetail);
