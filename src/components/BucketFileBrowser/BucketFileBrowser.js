import React from 'react';
import ListButtonFile from '../ListButtonFile/ListButtonFile';

const BucketFileBrowser = ({
  breadCrumbStack,
  setBreadCrumbStack,
  onBucketBrowserClick,
  authToken,
  items
}) => {
  const [selected, setSelected] = useState([]);

  const handleBreadCrumbStack = (link, index) => {
    setBreadCrumbStack(breadCrumbStack.slice(0, index + 1));
  };

  const handleOnBucketItemClick = (row) => {
    if (row.type === 'folder') {
      setBreadCrumbStack((breadCrumbStack) => [...breadCrumbStack, row.name]);
    }
  };

  const findWithProperty = (arr, prop, value) => {
    for (var i in arr) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = items.map((n) => ({ id: n.id, name: n.name }));
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleItemCheckboxClick = (fileItem) => {
    const selectedIndex = findWithProperty(selected, 'id', fileItem.id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, fileItem);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => findWithProperty(selected, 'id', id) !== -1;
  return (
    <div className="flex flex-col 2xl:max-w-2xl w-full">
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
        <ListButtonFile breadCrumbStack={breadCrumbStack} authToken={authToken} selected={selected} />
      </div>
      <div className="flex justify-end mb-3">
        <p>
          <span className="text-gray-400">Selected:</span> 0 Files: 0 bytes
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
                    <input type="checkbox" onClick={handleSelectAllClick} />
                  </th>
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
                      return (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={isItemSelected}
                              onClick={() => handleItemCheckboxClick(item)}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-file.png"
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  <a
                                    className="text-blue-500 hover:underline"
                                    onClick={() =>
                                      handleOnBucketItemClick({
                                        type: 'folder',
                                        name: 'Testbucket-3'
                                      })
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
                              {row.metadata ? (
                                <>
                                  {row.metadata.size ? (
                                    row.metadata.size < 1024 ? (
                                      <>{row.metadata.size} byte</>
                                    ) : (
                                      <>
                                        {row.metadata.size <
                                        Math.pow(1024, 2) ? (
                                          <>
                                            {Math.ceil(
                                              row.metadata.size / 1024
                                            )}{' '}
                                            KB
                                          </>
                                        ) : (
                                          <>
                                            {Math.ceil(
                                              row.metadata.size /
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
                              {item.created_at}
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
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-file.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          <a
                            className="text-blue-500 hover:underline"
                            onClick={() =>
                              handleOnBucketItemClick({
                                type: 'folder',
                                name: 'Testbucket-3'
                              })
                            }
                          >
                            Test-nubeS3
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">58.7 MB</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      04/16/2021 16:40
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketFileBrowser;
