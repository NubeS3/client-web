import { useState } from 'react';

const UploadButton = ({ onUploadClick }) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded"
      onClick={onUploadClick}
    >
      <img
        className="w-4 h-4 inline mb-1 mr-1"
        src="https://tree-ams5-0002.backblaze.com/pics/b2-browse-icon-upload.png"
      />
      Upload
    </button>
  );
};

const DownloadButton = ({ selected }) => {
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);

  return (
    <button
      type="button"
      className={
        selected.length > 0
          ? 'download bg-transparent hover:bg-transparent text-black hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded'
          : 'download bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 rounded cursor-not-allowed'
      }
      disabled={selected.length > 0 ? false : true}
    >
      Download
    </button>
  );
};

const NewFolderButton = ({ onNewFolderClick }) => {
  return (
    <>
      <button
        type="button"
        className="newFolder bg-transparent hover:bg-transparent text-black hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
        onClick={onNewFolderClick}
      >
        New Folder
      </button>
    </>
  );
};

const DeleteButton = ({ selected, onDeleteClick }) => {
  return (
    <button
      type="button"
      className={
        selected.length > 0
          ? 'delete bg-transparent hover:bg-transparent text-black hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded'
          : 'delete bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 rounded cursor-not-allowed'
      }
      disabled={selected.length > 0 ? false : true}
      onClick={onDeleteClick}
    >
      Delete
    </button>
  );
};

const SnapshotButton = ({ disabled }) => {
  return (
    <button
      type="button"
      className="snapshot bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
      disabled={disabled}
    >
      Snapshot
    </button>
  );
};

const ListButtonFile = ({
  breadCrumbStack,
  authToken,
  selected,
  onNewFolderClick,
  onUploadClick,
  onDeleteClick
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-1">
        <UploadButton onUploadClick={onUploadClick} />
        <DownloadButton selected={selected} />
        <NewFolderButton onNewFolderClick={onNewFolderClick} />
        <DeleteButton onDeleteClick={onDeleteClick} selected={selected} />
        <SnapshotButton />
      </div>
    </div>
  );
};

export default ListButtonFile;
