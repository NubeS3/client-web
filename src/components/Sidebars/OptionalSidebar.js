import React from 'react';

const OptionalSidebar = (props) => {
  return (
    <div className=" bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <div className="w-72 ">
          <nav className="mt-10 px-6 ">
            <a className="flex mt-1">
              <span className=" mx-4 text-gray-400  text-base font-medium">
                Account
              </span>
            </a>

            <a className="flex mt-1" href="#">
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                My Settings
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                Billing
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default OptionalSidebar;
