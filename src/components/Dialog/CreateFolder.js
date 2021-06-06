import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import store from '../../store';
import { createBucketFolder } from '../../store/userStorage/bucket';

const CreateFolder = ({ open, onCancel, authToken, breadCrumbStack }) => {
  const formik = useFormik({
    initialValues: {
      folderName: ''
    },
    validationSchema: Yup.object({
      folderName: Yup.string()
        .min(4, 'Minimum 4 characters')
        .max(64, 'Maximum 64 character')
        .matches(/^[a-zA-Z_]*[a-zA-Z0-9\-]{4,64}$/, 'Invalid name format')
        .required('Required!')
    }),
    onSubmit: (values) => {
      store.dispatch(
        createBucketFolder({
          authToken: authToken,
          name: values.folderName,
          parent_path: '/' + breadCrumbStack.join('/')
        })
      );
      onCancel();
    }
  });
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-12 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-3xl py-6">New Folder</h1>
          <hr />
          <form className="p-8" onSubmit={formik.handleSubmit}>
            <div className="flex flex-row w-full justify-center">
              <p>New Folder Name:</p>
              <div className="w-10" />
              <div>
                <input
                  name="folderName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="py-1 full text-sm text-gray-600 rounded-sm px-2 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                />
                {formik.errors.folderName ? (
                  <div className="text-red-600 text-sm mb-2" role="alert">
                    {formik.errors.folderName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="h-8" />
            <div className="flex flex-row justify-center">
              <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Folder
              </button>
              <button
                className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateFolder;
