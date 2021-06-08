import { useState } from 'react';
import store from '../../store';
import { createBucketFolder } from '../../store/userStorage/bucket';
import CreateFolder from '../Dialog/CreateFolder';

const UploadButton = ({ disabled, onUploadClick, selected }) => {
  return (
    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded"
      disabled={!!(selected.length > 0)}
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
      class="download bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
      disabled={!!(selected.length > 0)}
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
      className="delete bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
      disabled={!!(selected.length > 0)}
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
        <UploadButton onUploadClick={onUploadClick} selected={selected} />
        <DownloadButton selected={selected} />
        <NewFolderButton onNewFolderClick={onNewFolderClick} />
        <DeleteButton onDeleteClick={onDeleteClick} selected={selected} />
        <SnapshotButton />
      </div>
    </div>
  );
};

export default ListButtonFile;
