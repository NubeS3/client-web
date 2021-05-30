import React, { useEffect } from 'react';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { clearAppKeyState, createAppKey } from '../../store/userStorage/appKey';
import store from '../../store';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
const AddApplicationKey = ({
  open,
  onSubmit,
  onCancel,
  bucketList,
  authToken,
  setShowCard,
  isFulfilled,
  isRejected
}) => {
  const readWritePermissions = [
    'ListKeys',
    'WriteKey',
    'DeleteKey',
    'ListBuckets',
    'WriteBucket',
    'DeleteBucket',
    'ReadBucketEncryption',
    'WriteBucketEncryption',
    'ReadBucketRetentions',
    'WriteBucketRetentions',
    'ListFiles',
    'ReadFiles',
    'ShareFiles',
    'WriteFiles',
    'DeleteFiles',
    'LockFiles'
  ];
  const readPermissions = [
    'ListBuckets',
    'ListFiles',
    'ReadBucketEncryption',
    'ReadBucketRetentions',
    'ReadFiles',
    'ShareFiles'
  ];
  const writePermissions = [
    'ListBuckets',
    'WriteBucketEncryption',
    'WriteBucketRetentions',
    'WriteFiles',
    'DeleteFiles'
  ];
  const formik = useFormik({
    initialValues: {
      name: '',
      bucket_id: '*',
      expired_date: '',
      firename_prefix_restrict: '',
      permissions: readWritePermissions
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required!'),
      expired_date: Yup.number()
        .min(1, 'Duration must be a numeric value between 0 and 86400000.')
        .max(
          86400000,
          'Duration must be a numeric value between 0 and 86400000.'
        )
    }),
    onSubmit: (values) => {
      const nullDate = '0000-01-01T00:00:00.000+07:00';
      // console.log('appkey data', {
      //   authToken: authToken,
      //   name: values.name,
      //   bucket_id: values.bucket_id,
      //   expired_date: !values.expired_date
      //     ? nullDate
      //     : DateTime.fromSeconds(
      //         new Date().getTime() / 1000 + values.expired_date
      //       ).toISO(),
      //   firename_prefix_restrict: values.firename_prefix_restrict,
      //   permissions: values.permissions
      // });
      store.dispatch(
        createAppKey({
          authToken: authToken,
          name: values.name,
          bucket_id: values.bucket_id,
          expired_date: !values.expired_date
            ? nullDate
            : DateTime.fromSeconds(
                new Date().getTime() / 1000 + values.expired_date
              ).toISO(),
          firename_prefix_restrict: values.firename_prefix_restrict,
          permissions: values.permissions
        })
      );
      onCancel();
    }
  });

  useEffect(() => {
    if (isFulfilled) {
      setShowCard(true);
      store.dispatch(clearAppKeyState());
    }
    if (isRejected) {
      // log error
      store.dispatch(clearAppKeyState());
    }
    return () => {};
  }, [isFulfilled, isRejected]);

  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-2xl py-6">
            Add Application Key
          </h1>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-5 pl-16 pt-8 pr-6 pb-4 text-sm text-gray-500">
              <div className="col-span-2 my-2">
                <p>Name of Key:</p>
                <p className="text-xs">(keyName)</p>
              </div>
              <div className="group col-span-3">
                <input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    !formik.errors.name
                      ? 'w-full h-8 my-2 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500'
                      : 'w-full h-8 my-2 px-2 text-sm text-gray-600 rounded-sm border border-red-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-red-500'
                  }
                />
                {formik.errors.name ? (
                  <div className="text-red-600 text-sm mb-8" role="alert">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="col-span-2 my-2">
                <p>Allow access to Bucket(s):</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(bucketName)</p>
              </div>
              <select
                name="bucket_id"
                value={formik.values.bucket_id}
                onChange={formik.handleChange}
                className="col-span-3 h-8 my-2 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
              >
                <option value={'*'}>All</option>
                {bucketList
                  ? bucketList.map((item) => (
                      <option key={item.bucket.id} value={item.bucket.id}>
                        {item.bucket.name}
                      </option>
                    ))
                  : null}
              </select>
              <div className="col-span-2 my-2">
                <p>Type of Access:</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(capabilities)</p>
              </div>
              <div role="group" className="col-span-3 my-2">
                <input
                  name="permission"
                  type="radio"
                  defaultChecked
                  onClick={() =>
                    formik.setFieldValue('permissions', readWritePermissions)
                  }
                  value={readWritePermissions}
                />
                <label> Read and Write</label>
                <br />
                <input
                  name="permission"
                  type="radio"
                  onClick={() =>
                    formik.setFieldValue('permissions', readPermissions)
                  }
                  value={readPermissions}
                />
                <label> Read Only</label>
                <br />
                <input
                  name="permission"
                  type="radio"
                  onClick={() =>
                    formik.setFieldValue('permissions', writePermissions)
                  }
                  value={writePermissions}
                />
                <label> Write Only</label>
                <br />
              </div>
              <div className="col-span-2 my-2">
                <p>File name prefix:</p>
                <p className="text-xs">(optional)</p>
                <p className="text-xs">(namePrefix)</p>
              </div>
              <div className="col-span-3 my-2 flex flex-col justify-center items-center">
                <input
                  name="firename_prefix_restrict"
                  value={formik.values.firename_prefix_restrict}
                  onChange={formik.handleChange}
                  className="w-full h-8 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                />
                <p className="text-xs">
                  Allow access to file names that starts with this.
                </p>
              </div>
              <div className="col-span-2 my-2">
                <p>Duration (seconds):</p>
                <p className="text-xs">(optional) </p>
                <p className="text-xs">(validDurationSeconds)</p>
              </div>
              <div className="col-span-3 my-2 flex flex-col justify-center items-center">
                <input
                  name="expired_date"
                  type="number"
                  value={formik.values.expired_date}
                  onChange={formik.handleChange}
                  className="w-full h-8 px-2 text-sm text-gray-600 rounded-sm border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                />
                {formik.errors.expired_date ? (
                  <div className="text-red-600 text-sm mb-8" role="alert">
                    {formik.errors.expired_date}
                  </div>
                ) : null}
                <p className="text-xs">
                  Positive integer less than 1000 days (in seconds).
                </p>
              </div>
              <div className="flex col-span-5 my-2 justify-center items-center">
                <button
                  type="submit"
                  className="rounded-sm py-2 px-24 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create New Key
                </button>
              </div>
            </div>
          </form>
          <hr />
          <div className="flex justify-end w-full">
            <button
              className="rounded-sm m-4 py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const mapStateToProps = (state) => {
  const isFulfilled = state.appKey.isFulfilled;
  const isRejected = state.appKey.isRejected;
  return {
    isFulfilled,
    isRejected
  };
};

export default connect(mapStateToProps)(AddApplicationKey);
