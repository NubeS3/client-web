import React, { useEffect, useState } from 'react';
import store from '../../store';
import {
  clearBucketState,
  getChildrenByPath,
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

const BucketFileBrowser = ({ authToken, items, uploadDone, uploadFailed }) => {
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

  const [bucketSelected, setBucketSelected] = useState(
    history.location.state?.data.bucket.id
  );

  useEffect(() => {
    if (uploadDone) {
      setShowUploadDialog(false);
      store.dispatch(clearBucketState());
    }
    if (uploadFailed) {
      setShowUploadDialog(false);
      store.dispatch(clearBucketState());
    }
    return () => {};
  }, [uploadDone, uploadFailed]);

  const onBucketBrowserClick = () => {
    setBucketSelected(null);
    setBreadCrumbStack([]);
    history.push(paths.STORAGE_BROWSER);
  };

  useEffect(() => {
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

  // const handleCreateFolder = () => {

  //   // setOpenCreateFolderDialog(false);
  // };

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
          onClose={() => setShowUploadDialog(false)}
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
              <tbody className="bg-white divide-y divide-gray-200">
                {items
                  ? items.map((item) => {
                      const isItemSelected = isSelected(item.id);
                      const labelId = `enhanced-table-checkbox-${item.id}`;
                      return (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              aria-labelledby={labelId}
                              type="checkbox"
                              checked={isItemSelected}
                              onChange={(e) => handleItemCheckboxClick(e, item)}
                            />
                          </td>
                          <td>
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={
                                  item.type === 'file'
                                    ? 'https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-file.png'
                                    : 'https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-folder.png'
                                }
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  <a
                                    className="text-blue-500 hover:underline"
                                    onClick={() =>
                                      handleOnBucketItemClick(item)
                                    }
                                  >
                                    {item.name}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.metadata ? (
                                <>
                                  {item.metadata.size ? (
                                    item.metadata.size < 1024 ? (
                                      <>{item.metadata.size} byte</>
                                    ) : (
                                      <>
                                        {item.metadata.size <
                                        Math.pow(1024, 2) ? (
                                          <>
                                            {Math.ceil(
                                              item.metadata.size / 1024
                                            )}{' '}
                                            KB
                                          </>
                                        ) : (
                                          <>
                                            {Math.ceil(
                                              item.metadata.size /
                                                Math.pow(1024, 2)
                                            )}{' '}
                                            MB
                                          </>
                                        )}
                                      </>
                                    )
                                  ) : (
                                    ''
                                  )}
                                </>
                              ) : null}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.metadata ? item.metadata.upload_date : null}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a
                              href="#"
                              className="text-sm text-gray-900 hover:bg-blue-50"
                            >
                              <img
                                src="https://tree-ams5-0000.backblaze.com/pics/b2-info-icon.png"
                                className="w-5 h-5"
                              />
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
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
  return {
    uploadDone,
    uploadFailed
  };
};

export default connect(mapStateToProps)(BucketFileBrowser);
