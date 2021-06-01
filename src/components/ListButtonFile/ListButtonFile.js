import store from '../../store';
import { createBucketFolder } from '../../store/userStorage/bucket';
import CreateFolder from '../Dialog/CreateFolder';

const UploadButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded"
      disabled={disabled}
    >
      <img
        className="w-4 h-4 inline mb-1 mr-1"
        src="https://tree-ams5-0002.backblaze.com/pics/b2-browse-icon-upload.png"
      />
      Upload
    </button>
  );
};

const DownloadButton = ({ disabled }) => {
  return (
    <button
      type="button"
      class="download bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
      disabled={disabled}
    >
      Download
    </button>
  );
};

const NewFolderButton = ({}) => {
  const [showCreateFolderDialog, setShowCreateFolderDialog] = useState(false);
  return (
    <>
      {showCreateFolderDialog ? (
        <CreateFolder onCancel={() => setShowCreateFolderDialog(false)} />
      ) : null}
      <button
        type="button"
        className="newFolder bg-transparent hover:bg-transparent text-black hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
        onClick={() => setShowCreateFolderDialog(true)}
      >
        New Folder
      </button>
    </>
  );
};

const DeleteButton = ({ disabled }) => {
  return (
    <button
      type="button"
      className="delete bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded"
      disabled={disabled}
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

const ListButtonFile = ({ breadCrumbStack, authToken, selected }) => {
  const handleCreateFolder = () => {
    store.dispatch(
      createBucketFolder({
        authToken: authToken,
        name: 'folderName',
        parent_path: '/' + breadCrumbStack.join('/')
      })
    );
    // setOpenCreateFolderDialog(false);
  };

  const handleOpenDownload = () => {
    if (selected.length > 0) {
      setOpenDownloadDialog(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-1">
        <UploadButton />
        <DownloadButton />
        <NewFolderButton />
        <DeleteButton />
        <SnapshotButton />
      </div>
    </div>
  );
};

export default ListButtonFile;
