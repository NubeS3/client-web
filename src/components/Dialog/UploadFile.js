import React, { useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';

const UploadFile = ({ open, onClose, handleUpload }) => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

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
                handleUpload(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="w-full">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="flex flex-col w-full items-center py-20">
                      <h1 className="font-bold">Drop files here</h1>
                      <h1 className="italic">or</h1>
                      <h1>click to select a file</h1>
                    </div>
                  </div>
                  <aside>
                    <h4>Files</h4>
                    <ul>{fileNames}</ul>
                  </aside>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UploadFile;
