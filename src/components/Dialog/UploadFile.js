import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import LinearProgressBar from '../LinearProgressBar';

const UploadFile = ({
  open,
  onClose,
  handleUpload,
  handleUploadMultiple,
  progressInfos = [{ fileName: '', percentage: 0 }]
}) => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    if (acceptedFiles.length === 1) {
      handleUpload(acceptedFiles);
    } else {
      handleUpload(acceptedFiles);
    }
  };

  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-lg w-auto px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <div className="flex flex-col items-center">
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
            <hr className="w-full" />
            <Dropzone
              onDrop={(acceptedFiles) => {
                handleDrop(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="w-full cursor-pointer">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="flex flex-col w-full items-center py-20">
                      <h1 className="font-bold">Drop files here</h1>
                      <h1 className="italic">or</h1>
                      <h1>click to select a file</h1>
                    </div>
                  </div>
                  {fileNames.length > 0 ? (
                    <aside>
                      <div className="bg-white w-full rounded-none overflow-hidden">
                        <div className="px-4 py-5 sm:px-6">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Accepted Files
                          </h3>
                          {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Details and informations about user.
                        </p> */}
                        </div>
                        <div className="border-t border-gray-200">
                          <dl>
                            {fileNames.map((file, index) => (
                              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full">
                                <LinearProgressBar
                                  label={file}
                                  progressPercentage={
                                    progressInfos
                                      ? progressInfos[index]?.percentage
                                      : null
                                  }
                                />
                              </dd>
                            ))}
                          </dl>
                        </div>
                      </div>
                    </aside>
                  ) : null}
                </section>
              )}
            </Dropzone>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const mapStateToProps = (state) => {
  const progressInfos = state.bucket.progressInfos;
  return { progressInfos };
};
export default connect(mapStateToProps)(UploadFile);
