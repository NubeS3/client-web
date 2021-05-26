import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import paths from '../../../configs/paths';
import { useHistory } from 'react-router';
import store from '../../../store';
import { createBucket } from '../../../store/userStorage/bucket';
import { connect } from 'react-redux';

const CreateBucket = ({ open, onSubmit, onCancel, authToken }) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      bucketName: '',
      objectLock: 'disable',
      encryption: 'disable',
      privacy: 'private'
    },
    validationSchema: Yup.object({
      bucketName: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(64, 'Maximum 64 character')
        .matches(/^[a-zA-Z_]*[a-zA-Z0-9]$/, 'Invalid name format')
        .required('Required!')
    }),
    onSubmit: (values) => {
      // const error = preValidateRegisterData(values);
      // // if (error) {
      // //   return setError(error);
      // // }
      // setError("");
      alert(
        JSON.stringify({
          bucketName: values.bucketName,
          privacy: values.privacy,
          encryption: values.encryption,
          objectLock: values.objectLock
        })
      );
      // console.log(store.dispatch(createBucket({ authToken: authToken })));
      history.push(paths.STORAGE);
    }
  });
  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
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
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-3">
                <p className="mt-6 mb-8">Bucket Unique Name:</p>
                <div className="col-span-2 mb-4">
                  <div>
                    <input
                      spellCheck={false}
                      type="text"
                      name="bucketName"
                      value={formik.values.bucketName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.bucketName
                          ? 'col-span-2 mt-6 w-2/3 py-1 text-sm text-gray-600 rounded-sm px-2 border border-red-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-red-500'
                          : 'col-span-2 mt-6 w-2/3 py-1 text-sm text-gray-600 rounded-sm px-2 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500'
                      }
                    />
                    {formik.errors.bucketName ? (
                      <div className="text-red-600 text-sm mb-8" role="alert">
                        {formik.errors.bucketName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <p className="mb-4">Files in Bucket are:</p>
                <div className="col-span-2 mb-4">
                  <div role="group">
                    <input
                      type="radio"
                      id="b-private"
                      name="privacy"
                      value="private"
                      onChange={formik.handleChange}
                      defaultChecked
                    />
                    <label htmlFor="b-private"> Private</label>
                    <br />
                    <input
                      type="radio"
                      id="b-public"
                      name="privacy"
                      value="public"
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="b-public"> Public</label>
                    <br />
                  </div>
                </div>
                <p>Default Encryption:</p>
                <div className="col-span-2 mb-6">
                  <div role="group">
                    <input
                      type="radio"
                      id="enc-dis"
                      name="encryption"
                      value="disable"
                      defaultChecked
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="enc-dis"> Disable</label>
                    <br />
                    <input
                      type="radio"
                      id="enc-en"
                      name="encryption"
                      value="enable"
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="enc-en"> Enable</label>
                    <br />
                  </div>
                </div>
                <p>Object Lock:</p>
                <div className="col-span-2">
                  <p className="mb-4">
                    A security feature that can provide data immutability by
                    restricting a file from being modified or deleted for a
                    specified period of time.
                  </p>
                  <div className="mb-6" role="group">
                    <input
                      type="radio"
                      id="ol-dis"
                      name="objectLock"
                      value="disable"
                      defaultChecked
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="ol-dis"> Disable</label>
                    <br />
                    <input
                      type="radio"
                      id="ol-en"
                      name="objectLock"
                      value="enable"
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="ol-en"> Enable</label>
                    <br />
                  </div>
                  <hr className="mb-10" />
                </div>
                <div />
                <div className="col-span-2">
                  <div className="flex">
                    <button
                      type="submit"
                      className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create a Bucket
                    </button>
                    <button
                      className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={onCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  return {
    authToken
  };
};
export default connect(mapStateToProps)(CreateBucket);
