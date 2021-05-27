const UploadButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none rounded-sm "
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 28 26"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      Upload
    </button>
  );
};

const DownloadButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 border border-gray-300 hover:border-indigo-600 text-center text-base shadow-md focus:outline-none rounded-sm"
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 29 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download
    </button>
  );
};

const NewFolderButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 border border-gray-300 hover:border-indigo-600 text-center text-base shadow-md focus:outline-none rounded-sm"
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-7"
        fill="none"
        viewBox="0 0 28 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      New Folder
    </button>
  );
};

const DeleteButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 border border-gray-300 hover:border-indigo-600 text-center text-base shadow-md focus:outline-none rounded-sm"
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 27 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Delete
    </button>
  );
};

const SnapshotButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 border border-gray-300 hover:border-indigo-600 text-center text-base shadow-md focus:outline-none rounded-sm"
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-7"
        fill="none"
        viewBox="0 0 28 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Snapshot
    </button>
  );
};

const ListButtonFile = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-1">
        <UploadButton />
        <DownloadButton />
        <NewFolderButton />
        <DeleteButton />
        <SnapshotButton />
      </div>
      <div className="flex flex-row self-end">
        <p>Selected: 0 Files: 0 bytes</p>
      </div>
    </div>
  );
};

export default ListButtonFile;
