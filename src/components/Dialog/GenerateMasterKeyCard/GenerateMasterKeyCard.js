import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import paths from '../../../configs/paths';
import { useHistory } from 'react-router';
import store from '../../../store';
import { connect } from 'react-redux';

const GeneratingMasterKeyCard = ({ open, onSubmit, onCancel }) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      isGenerate: false
    },
    onSubmit: (values) => {
      // const error = preValidateRegisterData(values);
      // // if (error) {
      // //   return setError(error);
      // // }
      // setError("");
      alert(
        JSON.stringify({
          isGenerate: values.isGenerate
        })
      );
      // console.log(store.dispatch(createBucket({ authToken: authToken })));
      history.push(paths.STORAGE);
    }
  });
  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70 rounded-lg">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-3xl py-6">Are You Sure?</h1>
          <hr />
          <div className="mt-6 mb-6 px-4 mx-auto">
            <p>Generating a new key will cancel the old key.</p>
            {/* <form onSubmit={formik.handleSubmit}></form> */}
          </div>
          <hr />
          <div className="col-span-2">
            <div className="flex justify-end mt-4 pb-4 pr-6">
              <button
                className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
                onClick={onSubmit}
              >
                Yes! Generate Master Key
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
export default connect(mapStateToProps)(GeneratingMasterKeyCard);
