import React, { useState } from 'react';

const BrowserFile = ({
  bucketList,
  onClick,
  breadCrumbStack,
  setBreadCrumbStack
}) => {
  return (
    <div className="flex flex-col w-full">
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
        <p className="inline text-lg">Buckets</p>
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
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bucketList
                  ? bucketList.map((item, index) => (
                      <tr key={item.bucket.id || index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-7 w-7 rounded-full"
                                src="https://tree-ams5-0001.backblaze.com/pics/b2-browse-icon-bucket.png"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                <a
                                  className="text-blue-500 hover:underline"
                                  onClick={() =>
                                    onClick(item.bucket.id, item.bucket.name)
                                  }
                                >
                                  {item.bucket.name}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.bucket ? (
                              <>
                                {item.size ? (
                                  item.size < 1024 ? (
                                    <>{item.size} byte</>
                                  ) : (
                                    <>
                                      {item.size < Math.pow(1024, 2) ? (
                                        <>{Math.ceil(item.size / 1024)} KB</>
                                      ) : (
                                        <>
                                          {Math.ceil(
                                            item.size / Math.pow(1024, 2)
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
                            {new Date(item.bucket.created_at).toDateString()}
                          </div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserFile;
