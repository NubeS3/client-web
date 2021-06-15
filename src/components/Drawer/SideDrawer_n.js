import React, { useState } from 'react';
import './SideDrawerN.css';

const SideDrawerN = ({ children }) => {
  const [isShow, setShow] = useState(false);

  let drawerClasses = ' transition transform translate-x-full ';
  let backdropClasses = ' ';

  if (isShow) {
    drawerClasses = 'transition transform translate-x-0';
    backdropClasses = ' backdrop-filter backdrop-brightness-50 ';
  }

  function open() {
    setShow(true);
  }

  function close() {
    setShow(false);
  }

  return (
    <div className={backdropClasses + `w-screen h-screen`} onClick={close}>
      <div
        className={
          drawerClasses +
          ' absolute bg-white dark:bg-gray-800 inline-block right-0 duration-300 ease-out'
        }
      >
        <div className="flex flex-col sm:flex-row sm:justify-around ">
          <div className="w-72 h-screen">
            <nav className="mt-10 px-6 ">
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                <span className="mx-4 text-lg font-normal">Element</span>
                <span className="flex-grow text-right"></span>
              </a>
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                href="#"
              >
                <span className="mx-4 text-lg font-normal">Form</span>
                <span className="flex-grow text-right"></span>
              </a>
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                <span className="mx-4 text-lg font-normal">Commerce</span>
                <span className="flex-grow text-right"></span>
              </a>
            </nav>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SideDrawerN;
