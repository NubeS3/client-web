import React from 'react';

const EmailCard = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1>
      <form method="POST" className="pb-16 pt-4 w-5/6">
        <div class="relative text-gray-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              class="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            type="text"
            name="q"
            class="w-full py-2 text-sm text-white rounded-sm pl-10 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
            placeholder="Email address"
            autocomplete="off"
          />
        </div>
        <button
          type="submit"
          className="relative w-full my-2 rounded-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </form>
    </div>
  );
};

const PasswordCard = ({ email = 'thesplendore@gmail.com' }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1>
      <div className="flex flex-col justify-center items-center">
        <p>{email}</p>
        <a href="#" className="text-blue-600">
          {'(Change)'}
        </a>
      </div>
      <form method="POST" className="pt-4 w-5/6">
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <input
            type="password"
            name="q"
            class="w-full py-2 text-sm text-white rounded-sm pl-10 border border-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-indigo-500"
            placeholder="Password"
            autocomplete="off"
          />
        </div>
        <button
          type="submit"
          className="relative w-full my-2 rounded-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>
      <a href="#" className="text-blue-600 py-6">
        Forgot Password?
      </a>
    </div>
  );
};

const RequiredEmailVerification = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl text-center">
        NubeS3 Requires Your Account To Have An Email Verification
      </h1>
      <hr className="w-11/12 py-4" />
      <p className="pb-6">
        Please go to your My Settings Page to add a phone number.
      </p>
      <button className="relative mb-8 my-2 rounded-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Go to My Settings
      </button>
    </div>
  );
};

const VerifyEmail = ({ email = 'thesplendore@gmail.com' }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-40">
      <h1 className="pt-6 pb-8 text-2xl text-center">Verify Phone Number</h1>
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
          <button className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
        </div>
      </form>
      <div className="flex flex-col w-11/12 text-gray-500 justify-center items-center mb-12">
        <p className="text-center">
          You will receive an email to verify your email address and
          authenticate your login (if you choose that option). One message per
          request. Message & data rates may apply.
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
  );
};

export { EmailCard, PasswordCard, RequiredEmailVerification, VerifyEmail };
