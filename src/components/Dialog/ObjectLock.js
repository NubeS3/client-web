import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import store from '../../store';
import { updateBucketSettings } from '../../store/userStorage/bucket';

const ObjectLock = ({ item, onCancel, authToken }) => {
  const formik = useFormik({
    initialValues: {
      isObjectLock: item.bucket.is_object_lock,
      holdDuration: item.bucket.hold_duration
    },
    validationSchema: Yup.object({
      holdDuration: Yup.number()
        .min(1, 'Retention must be between 0 and 3000 days')
        .max(3000, 'Retention must be between 0 and 3000 days')
    }),
    onSubmit: (values) => {
      console.log(values.holdDuration);
      store.dispatch(
        updateBucketSettings({
          authToken: authToken,
          bucketId: item.bucket.id,
          holdDuration: values.holdDuration * 86400
        })
      );
      onCancel();
    }
  });

  return (
    <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
      <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-3 bg-white shadow rounded-sm my-auto text-gray-600">
        <h1 className="w-full text-center text-2xl py-6">Object Lock</h1>
        <hr />
        {item.bucket ? (
          <>
            {!item.bucket.is_object_lock ? (
              <div className="m-8">
                <p>
                  Object Lock is a security feature that can provide data
                  immutability by restricting a file from being modified or
                  deleted for a specified period of time (Object Lock Retention
                  Policy). Object Lock must be enabled on a Bucket for an Object
                  Lock Retention Policy to be applied. <a>Learn more.</a>
                </p>
                <div className="col-span-3 mt-2">
                  <div className="flex flex-row justify-end">
                    <button
                      className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={onCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={formik.handleSubmit}>
                <div className="m-8">
                  <div className="col-span-1">
                    <p>
                      Applying a Retention Policy to a bucket will prevent a
                      file from being deleted or modified for the specified
                      number of days. Learn more.
                    </p>
                    <ul class="list-disc m-8">
                      <li>
                        Once a Default Retention Policy is set for a bucket,
                        that policy applies to files uploaded into the bucket
                        from that point forward. Files in the bucket before the
                        policy was set are not locked.
                      </li>
                      <li>
                        When used with backup software, a retention policy
                        should be set directly within that software. If object
                        lock is used with backup software, setting a Default
                        Retention Policy within the bucket can result in
                        unpredictable data loss.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row justify-center">
                    <b>Default Retention Policy for Bucket: </b>
                    <input
                      name="holdDuration"
                      onChange={formik.handleChange}
                      type={'number'}
                      defaultValue={
                        item.bucket.hold_duration > 0
                          ? item.bucket.hold_duration
                          : null
                      }
                      className="w-28 border border-gray-400 rounded-sm focus:outline-none focus:border-indigo-500 mx-1"
                    />
                    <p>Day(s)</p>
                  </div>
                  {formik.errors.holdDuration ? (
                    <div
                      className="text-red-600 text-sm my-8 text-center"
                      role="alert"
                    >
                      {formik.errors.holdDuration}
                    </div>
                  ) : null}
                  <div className="col-span-3 mt-10">
                    <div className="flex flex-row justify-center">
                      <button
                        type={'submit'}
                        className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save changes
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
                      <p className="text-xs text-gray-400 font-bold">
                        10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ObjectLock;
