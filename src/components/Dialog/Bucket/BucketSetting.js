import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import store from '../../../store';
import { updateBucketSettings } from '../../../store/userStorage/bucket';

const BucketSetting = ({ item, onCancel, onDeleteClick, authToken }) => {
  const formik = useFormik({
    initialValues: {
      isEncrypted: item.bucket.is_encrypted,
      isPublic: item.bucket.is_public
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      store.dispatch(
        updateBucketSettings({
          authToken: authToken,
          isPublic: values.isPublic,
          isEncrypted: values.isEncrypted,
          bucketId: item.bucket.id
        })
      );
      onCancel();
    }
  });
  return (
    <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
      <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-3 bg-white shadow rounded-sm my-auto text-gray-600">
        <h1 className="w-full text-center text-2xl py-6">Bucket Settings</h1>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-3 m-8">
            <div className="col-span-3">
              <br />
            </div>
            <p>Bucket Unique Name:</p>
            <p className="col-span-2 font-bold">{item.bucket.name || ''}</p>
            <div className="col-span-3">
              <br />
              <svg
                class="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
              <br />
            </div>
            <p>Files in Bucket are: </p>
            <div className="col-span-2" role="group">
              <input
                type="radio"
                id="f-private"
                name="isPublic"
                checked={!formik.values.isPublic}
                onChange={() => formik.setFieldValue('isPublic', false)}
                value={false}
              />
              <label htmlFor="f-private"> Private</label>
              <br />
              <input
                type="radio"
                id="f-public"
                name="isPublic"
                checked={formik.values.isPublic}
                onChange={() => formik.setFieldValue('isPublic', true)}
                value={true}
              />
              <label htmlFor="f-public"> Public</label>
              <br />
            </div>
            <div className="col-span-3">
              <br />
              <br />
            </div>
            {/* <p>Bucket Info:</p>
            <div className="col-span-2">
              <input className="w-full px-2 border border-gray-200 rounded-sm focus:outline-none focus:border-indigo-500" />
              <p className="text-xs text-gray-400">{`Use json format: {"number field": 0, "textField": "value"}`}</p>
            </div>
            <div className="col-span-3">
              <br />
            </div> */}
            <p>Default Encryption</p>
            <div className="col-span-2">
              <div role="group">
                <input
                  type="radio"
                  id="e-disable"
                  name="isEncrypted"
                  checked={!formik.values.isEncrypted}
                  onChange={() => formik.setFieldValue('isEncrypted', false)}
                  value={false}
                />
                <label htmlFor="e-disable"> Disable</label>
                <br />
                <input
                  type="radio"
                  id="e-enable"
                  name="isEncrypted"
                  checked={formik.values.isEncrypted}
                  onChange={() => formik.setFieldValue('isEncrypted', true)}
                  value={true}
                />
                <label htmlFor="e-enable"> Enable</label>
                <br />
              </div>
              <p className="text-xs text-gray-400">
                An encryption key that NubeS3 creates, manages and uses for you
              </p>
            </div>
            <div className="col-span-3">
              <br />
            </div>
            <div className="col-span-3">
              <div className="flex flex-row justify-center">
                <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Update Bucket
                </button>
                <button
                  className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
              <br />
              <div className="flex flex-row justify-center">
                <p className="text-xs text-gray-400">
                  Change takes effect in approximately
                </p>
                <p>&nbsp;</p>
                <p className="text-xs text-gray-400 font-bold">10 minutes</p>
              </div>
            </div>
            <div className="col-span-3">
              <br />
              <br />
              <br />
            </div>
            <div className="col-span-3 w-full flex flex-row justify-end">
              <button
                onClick={onDeleteClick}
                type={'submit'}
                className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-red-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
              >
                Delete Bucket
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BucketSetting;
