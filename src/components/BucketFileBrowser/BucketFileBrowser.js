import React from 'react';

const BucketFileBrowser = () => {
  return (
    <div className="flex flex-col 2xl:max-w-2xl mx-auto">
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
          <a href="#" className="mr-1 hover:underline">
            Buckets
          </a>
          /
          <a href="#" className="ml-1 hover:underline">
            NubeS3Test
          </a>
        </p>
      </div>
      <div className="mb-5">
        <a className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded">
          <img
            className="w-4 h-4 inline mb-1 mr-1"
            src="https://tree-ams5-0002.backblaze.com/pics/b2-browse-icon-upload.png"
          />
          Upload
        </a>
        <a className="download bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded">
          Download
        </a>
        <a className="newFolder bg-transparent hover:bg-transparent text-black hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded">
          New Folder
        </a>
        <a className="delete bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded">
          Delete
        </a>
        <a className="snapshot bg-transparent hover:bg-transparent text-gray-200 hover:text-blue-300 py-2 px-3 ml-1 border border-gray-100-500 hover:border-blue-300 rounded">
          Snapshot
        </a>
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
                    <input type="checkbox" />
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
                          <a className="text-blue-500 hover:underline" href="#">
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
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-folder.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          <a className="text-blue-500 hover:underline" href="#">
                            Test
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
                          <a className="text-blue-500 hover:underline" href="#">
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
                          <a className="text-blue-500 hover:underline" href="#">
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
