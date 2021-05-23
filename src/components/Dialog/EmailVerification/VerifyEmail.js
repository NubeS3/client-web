import React from 'react';

const VerifyEmail = ({ open, onSubmit, onCancel }) => {
  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
          <h1 className="pt-6 pb-8 text-2xl text-center">Verify Your Email</h1>
          <hr className="w-11/12 pt-4 pb-12" />
          <form method="POST" className="pt-4 w-full">
            <div class="flex flex-col relative text-gray-400 mb-2">
              <label className="text-gray-600">Current Password</label>
              <input
                type="password"
                name="q"
                class="w-2/3 py-2 text-sm text-white rounded-sm px-4 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                autocomplete="off"
              />
            </div>
            <div className="w-full flex items-end mb-12">
              <div class="flex flex-col relative text-gray-400 mr-2 w-3/5">
                <label className="text-gray-600">Email</label>
                <input
                  type="text"
                  value={email}
                  disabled="true"
                  name="q"
                  class="py-2 text-sm text-gray-600 rounded-sm px-4 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
                  autocomplete="off"
                />
              </div>
              <button className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send Code
              </button>
            </div>
          </form>
          <p className="text-gray-500 mb-4">
            Enter the 8-digit verification code sent to your email
          </p>
          <form method="POST" className="w-full mb-4">
            <input
              type="text"
              class="py-2 text-sm text-gray-600 rounded-sm px-4 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
              autocomplete="off"
            />
            <div className="flex justify-end">
              <button className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Verify
              </button>
              <button className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="flex flex-col w-11/12 text-gray-500 justify-center items-center mb-12">
            <p className="text-center">
              You will receive an email to verify your email address and
              authenticate your login (if you choose that option). One message
              per request. Message & data rates may apply.
            </p>
            <div className="flex">
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>
              <p className="mx-2">{'&'}</p>
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default VerifyEmail;
