import React from 'react';

const CreateBucket = (props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="flex flex-col mx-auto justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600 z-11">
        <h1 className="w-full text-center text-3xl py-6">Create a Bucket</h1>
        <hr />
        <div className="mt-6 mb-6 px-4">
          <p>
            A bucket is a container that holds files that are uploaded into
            NubeS3 Cloud Storage. The bucket name must be unique globally and
            must have a minimum of 6 characters. A limit of 100 buckets may be
            created per account. An unlimited number of files may be uploaded
            into a bucket.
          </p>
          <form>
            <div className="grid grid-cols-3">
              <p className="mt-6 mb-8">Bucket Unique Name:</p>
              <input className="col-span-2 mt-6 mb-8 w-2/3 py-1 text-sm text-gray-600 rounded-sm px-2 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500" />
              <div className="col-span-3 mb-4">
                <p className="mb-4">Files in Bucket are:</p>
                <form>
                  <input
                    type="radio"
                    id="b-private"
                    name="type"
                    value="private"
                    defaultChecked
                  />
                  <label htmlFor="b-private"> Private</label>
                  <br />
                  <input
                    type="radio"
                    id="b-public"
                    name="type"
                    value="public"
                  />
                  <label htmlFor="b-public"> Public</label>
                  <br />
                </form>
              </div>
              <p>Default Encryption:</p>
              <div className="col-span-2 mb-6">
                <form>
                  <input
                    type="radio"
                    id="enc-dis"
                    name="encryption"
                    value="disable"
                    defaultChecked
                  />
                  <label htmlFor="enc-dis"> Disable</label>
                  <br />
                  <input
                    type="radio"
                    id="enc-en"
                    name="encryption"
                    value="enable"
                  />
                  <label htmlFor="enc-en"> Enable</label>
                  <br />
                </form>
              </div>
              <p>Object Lock:</p>
              <div className="col-span-2">
                <p className="mb-4">
                  A security feature that can provide data immutability by
                  restricting a file from being modified or deleted for a
                  specified period of time.
                </p>
                <form className="mb-6">
                  <input
                    type="radio"
                    id="ol-dis"
                    name="encryption"
                    value="disable"
                    defaultChecked
                  />
                  <label htmlFor="ol-dis"> Disable</label>
                  <br />
                  <input
                    type="radio"
                    id="ol-en"
                    name="encryption"
                    value="enable"
                  />
                  <label htmlFor="ol-en"> Enable</label>
                  <br />
                </form>
                <hr className="mb-10" />
              </div>
              <div />
              <div className="col-span-2">
                <div className="flex">
                  <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create a Bucket
                  </button>
                  <button className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBucket;
