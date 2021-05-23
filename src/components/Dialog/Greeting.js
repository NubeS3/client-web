import React from 'react';

const Greeting = (props) => {
  return (
    <dialog open={props.open}>
      <div className="flex flex-col justify-center items-center max-w-lg py-10 px-8 my-40 mx-auto bg-white shadow rounded-sm">
        <h1 className="py-6 text-2xl">Thank you for being with us.</h1>
        <p className="pt-4">Your NubeS3 account has been created.</p>
        <p className="py-2">Let's store.</p>
        <button className="px-10 py-2 my-4 w-3/4 bg-blue-500 text-white rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Take Me To My Account
        </button>
      </div>
    </dialog>
  );
};

export default Greeting;
