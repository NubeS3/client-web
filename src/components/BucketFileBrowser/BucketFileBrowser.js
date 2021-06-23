import React, { useEffect, useState } from 'react';
import store from '../../store';
import {
  clearBucketState,
  getChildrenByPath,
  updateTotalUpload,
  uploadFile,
  uploadFileMultiple
} from '../../store/userStorage/bucket';
import CreateFolder from '../Dialog/CreateFolder';
import UploadFile from '../Dialog/UploadFile';
import ListButtonFile from '../ListButtonFile/ListButtonFile';
import ItemDetail from '../Dialog/ItemDetail';
import { useHistory } from 'react-router';
import paths from '../../configs/paths';
import DeleteFile from '../Dialog/Delete/DeleteFile';
import { connect } from 'react-redux';
import BucketFileTable from './BucketFileTable';

const BucketFileBrowser = ({
  authToken,
  items,
  uploadDone,
  uploadFailed,
  totalUpload,
  fetchingFailed,
  fetchingSucceeded
}) => {
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  const [showCreateFolderDialog, setShowCreateFolderDialog] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedSingle, setSelectedSingle] = useState();
  const [breadCrumbStack, setBreadCrumbStack] = useState([
    history.location.state?.data.bucket.name
  ]);

  const [loading, setLoading] = useState(true);

  const [bucketSelected, setBucketSelected] = useState(
    history.location.state?.data.bucket.id
  );

  useEffect(() => {
    if (uploadDone && totalUpload === 0) {
      setShowUploadDialog(false);
      store.dispatch(clearBucketState());
    } else if (uploadDone) {
      store.dispatch(updateTotalUpload());
    }
    if (uploadFailed && totalUpload === 0) {
      setShowUploadDialog(false);
      store.dispatch(clearBucketState());
    } else if (uploadFailed) {
      store.dispatch(updateTotalUpload());
    }
    return () => {};
  }, [uploadDone, uploadFailed]);

  useEffect(() => {
    if (fetchingSucceeded) {
      setLoading(false);
      store.dispatch(clearBucketState());
    }
    if (fetchingFailed) {
      setLoading(false);
      store.dispatch(clearBucketState());
    }
  }, [fetchingFailed, fetchingSucceeded]);

  const onBucketBrowserClick = () => {
    setBucketSelected(null);
    setBreadCrumbStack([]);
    history.push(paths.STORAGE_BROWSER);
  };

  useEffect(() => {
    setLoading(true);
    store.dispatch(
      getChildrenByPath({
        authToken: authToken,
        full_path: '/' + breadCrumbStack.join('/')
      })
    );
    console.log('/' + breadCrumbStack.join('/'));
  }, [breadCrumbStack]);

  const handleBreadCrumbStack = (link, index) => {
    setBreadCrumbStack(breadCrumbStack.slice(0, index + 1));
  };

  const onItemDetailClose = () => {
    setShowItemDetail(false);
    setSelectedSingle(null);
  };

  const [totalSize, setTotalSize] = useState(0);
  useEffect(() => {
    if (selected.length === 0) setTotalSize(0);
    let result = 0;
    selected.forEach((file) => {
      if (file.metadata) {
        setTotalSize(result + file.metadata.size);
      }
    });
    return () => {};
  }, [selected]);

  const handleUpload = (acceptedFiles) => {
    var parent_path = '';
    if (breadCrumbStack.length === 1) {
      parent_path = '/';
    } else {
      parent_path = '/' + breadCrumbStack.slice(1).join('/');
    }
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      store.dispatch(
        uploadFile({
          authToken: authToken,
          file: file,
          bucketId: bucketSelected,
          full_path: parent_path
        })
      );
    });
  };

  const handleUploadMultiple = (acceptedFiles) => {
    var parent_path = '';
    if (breadCrumbStack.length === 1) {
      parent_path = '/';
    } else {
      parent_path = '/' + breadCrumbStack.slice(1).join('/');
    }
    store.dispatch(
      uploadFileMultiple({
        authToken: authToken,
        acceptedFiles: acceptedFiles,
        bucketId: bucketSelected,
        full_path: parent_path
      })
    );
  };

  const onUploadDialogClose = () => {
    setShowUploadDialog(false);
    store.dispatch(clearBucketState());
  };

  const handleOnBucketItemClick = (item) => {
    if (item.type === 'folder') {
      setBreadCrumbStack((breadCrumbStack) => [...breadCrumbStack, item.name]);
    }
    if (item.type === 'file') {
      setShowItemDetail(true);
      setSelectedSingle(item);
    }
  };

  const findWithProperty = (arr, prop, value) => {
    // console.log(value);
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      // const newSelecteds = items.map((n) => ({
      //   id: n.id,
      //   name: n.name,
      //   size: n.size
      // }));
      const newSelecteds = items.map((n) => n);
      // console.log(newSelecteds);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleItemCheckboxClick = (e, fileItem) => {
    const selectedIndex = findWithProperty(selected, 'id', fileItem.id);

    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, fileItem);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      console.log(
        selected,
        selected.slice(selectedIndex + 1),
        selected.slice(0, selectedIndex)
      );
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1, selected.length + 1)
      );
    }
    // console.log(newSelected);
    setSelected(newSelected);
  };

  const isSelected = (id) => findWithProperty(selected, 'id', id) !== -1;
  return (
    <div className="flex flex-col w-full">
      {showDeleteDialog ? (
        <DeleteFile
          authToken={authToken}
          selected={selected}
          numOfFiles={selected.length}
          onClose={() => setShowDeleteDialog(false)}
          breadCrumbStack={breadCrumbStack}
          bucketName={breadCrumbStack[0]}
          bucketId={bucketSelected}
        />
      ) : null}
      {showItemDetail ? (
        <ItemDetail
          item={selectedSingle}
          bucketId={bucketSelected}
          breadCrumbStack={breadCrumbStack}
          authToken={authToken}
          onClose={onItemDetailClose}
        />
      ) : null}
      {showCreateFolderDialog ? (
        <CreateFolder
          onCancel={() => setShowCreateFolderDialog(false)}
          authToken={authToken}
          breadCrumbStack={breadCrumbStack}
        />
      ) : null}
      {showUploadDialog ? (
        <UploadFile
          onClose={onUploadDialogClose}
          handleUpload={handleUpload}
          handleUploadMultiple={handleUploadMultiple}
        />
      ) : null}
      {/* // <p className="text-3xl text-gray-600">Browse Files</p> */}
      <div className="mt-8 mb-8">
        <a href="#">
          <img
            width="20"
            height="20"
            className="inline mt-1"
            src="https://tree-ams5-0001.backblaze.com/pics/b2-browse-files-refresh-icon.png"
          />
        </a>
        <p className="inline ml-2 text-lg text-blue-700">
          <a
            color="inherit"
            key={'buckets'}
            onClick={onBucketBrowserClick}
            className="mr-1 hover:underline"
          >
            Buckets
          </a>
          /
          {breadCrumbStack.map((link, index) => {
            return (
              <>
                <a
                  color="inherit"
                  key={index}
                  onClick={() => handleBreadCrumbStack(link, index)}
                  className="mr-1 hover:underline"
                >
                  {link}
                </a>
                /
              </>
            );
          })}
        </p>
      </div>
      <div className="mb-5">
        <ListButtonFile
          breadCrumbStack={breadCrumbStack}
          authToken={authToken}
          selected={selected}
          onNewFolderClick={() => setShowCreateFolderDialog(true)}
          onUploadClick={() => setShowUploadDialog(true)}
          onDeleteClick={() => setShowDeleteDialog(true)}
        />
      </div>
      <div className="flex justify-end mb-3">
        <p>
          <span className="text-gray-400">Selected: </span>
          {selected.length} Files:{' '}
          {totalSize ? (
            totalSize < 1024 ? (
              <>{totalSize} bytes</>
            ) : (
              <>
                {totalSize < Math.pow(1024, 2) ? (
                  <>{Math.ceil(totalSize / 1024)} KB</>
                ) : (
                  <>{Math.ceil(totalSize / Math.pow(1024, 2))} MB</>
                )}
              </>
            )
          ) : (
            <>{totalSize} bytes</>
          )}
        </p>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      checked={selected.length === items.length}
                      onClick={handleSelectAllClick}
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Uploaded
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <BucketFileTable
                items={items}
                isSelected={isSelected}
                handleOnBucketItemClick={handleOnBucketItemClick}
                handleItemCheckboxClick={handleItemCheckboxClick}
                isLoading={loading}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const uploadDone = state.bucket.uploadDone;
  const uploadFailed = state.bucket.uploadFailed;
  const totalUpload = state.bucket.totalUpload;
  const fetchingFailed = state.bucket.fetchingFailed;
  const fetchingSucceeded = state.bucket.fetchingSucceeded;
  return {
    uploadDone,
    uploadFailed,
    totalUpload,
    fetchingFailed,
    fetchingSucceeded
  };
};

export default connect(mapStateToProps)(BucketFileBrowser);
