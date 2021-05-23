import React from 'react';
import paths from '../../configs/paths';

// Which one was choosen has font-normal and color gray-800

const FixedSidedbar = (props) => {
  return (
    <div className=" bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <div className="w-72 ">
          <nav className="mt-10 px-6 ">
            <a className="flex mt-1">
              <span className=" mx-4 text-gray-400  text-base font-medium">
                NubeS3 Cloud Storage
              </span>
            </a>
            <a className="flex mt-2" href={paths.STORAGE}>
              <span className=" mx-4 text-gray-800 hover:text-gray-600 text-base font-bold">
                Buckets
              </span>
            </a>
            <a className="flex mt-1" href={paths.STORAGE_APPKEY}>
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                App Keys
              </span>
            </a>
            <a className="flex mt-1" href={paths.STORAGE_BROWSER}>
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                Browser Files
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                Snapshots
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                Reports
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                Caps & Alerts
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span className="mx-4 text-blue-500 hover:text-gray-600 text-base font-light">
                Fireball
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default FixedSidedbar;
