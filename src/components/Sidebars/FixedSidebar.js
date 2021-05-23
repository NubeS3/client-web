import React, { useState, useEffect } from 'react';
import paths from '../../configs/paths';

// Which one was choosen has font-normal and color gray-800

const FixedSidedbar = (props) => {
  const appBar = {
    bucket: false,
    appkey: false,
    browser: false,
    snapshot: false,
    report: false,
    caps: false,
    fireball: false
  };
  const [appBarState, setAppBarState] = useState(appBar);

  useEffect(() => {
    setAppBarState({
      ...appBar,
      [props.active]: true
    });
    return () => {};
  }, []);

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
              <span
                className={
                  appBarState.bucket
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
                Buckets
              </span>
            </a>
            <a className="flex mt-1" href={paths.STORAGE_APPKEY}>
              <span
                className={
                  appBarState.appkey
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
                App Keys
              </span>
            </a>
            <a className="flex mt-1" href={paths.STORAGE_BROWSER}>
              <span
                className={
                  appBarState.browser
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
                Browser Files
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span
                className={
                  appBarState.snapshot
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
                Snapshots
              </span>
            </a>
            <a className="flex mt-1" href={paths.STORAGE_REPORT}>
              <span
                className={
                  appBarState.report
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
                Reports
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span
                className={
                  appBarState.caps
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
                Caps & Alerts
              </span>
            </a>
            <a className="flex mt-1" href="#">
              <span
                className={
                  appBarState.fireball
                    ? ' mx-4 text-gray-800 hover:text-gray-600 text-base font-bold'
                    : 'mx-4 text-blue-500 hover:text-gray-600 text-base font-light'
                }
              >
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
