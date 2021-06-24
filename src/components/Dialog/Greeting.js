import React from 'react';

const Greeting = ({ open, onClick }) => {
  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col justify-center items-center max-w-lg py-10 px-8 my-40 mx-auto bg-white shadow rounded-sm">
          <h1 className="py-6 text-2xl">Thank you for being with us.</h1>
          <p className="pt-4">Your NubeS3 account has been created.</p>
          <p className="py-2">Let's store.</p>
          <button
            onClick={onClick}
            className="px-10 py-2 my-4 w-3/4 bg-blue-500 text-white rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Take Me To My Account
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Greeting;
