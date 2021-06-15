import React from 'react';
import Transition from './Transition';
const Sidebar = () => {
  const [isClosed, setClosed] = React.useState(false);
  const [isHiddenUser, setHiddenUser] = React.useState(false);
  const [isHiddenGroup, setHiddenGroup] = React.useState(false);
  const [isHiddenBill, setHiddenBill] = React.useState(false);
  return (
    <>
      {isClosed && (
        <div className="flex">
          <button
            tabIndex="1"
            className="w-10 p-1 m-2"
            aria-label="Open menu"
            title="Open menu"
            onClick={() => setClosed(false)}
          >
            <svg
              aria-hidden="true"
              fill="none"
              strokeWidth="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      )}
      <div className="absolute top-0 left-0">
        <Transition
          show={!isClosed}
          enter="transition-all duration-300"
          enterFrom="-ml-64"
          enterTo="ml-0"
          leave="transition-all duration-300"
          leaveTo="-ml-64"
        >
          {/* {!isClosed && ( */}

          <aside
            aria-hidden={isClosed}
            className="bg-white w-64 min-h-screen flex flex-col"
          >
            <div className="bg-white px-3 h-10 flex items-center justify-between border-r-2">
              <button
                tabIndex="1"
                className="w-10 p-1"
                aria-label="Close menu"
                title="Close menu"
                onClick={() => setClosed(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* <div className="border-r py-4 flex-grow relative">
              <nav>
                <ul>
                  <li className="p-3">
                    <a href=""> Home </a>
                  </li>
                  <li className="p-3">
                    <a href=""> Profile </a>
                  </li>
                  <li className="p-3">
                    <a href=""> Portfolio </a>
                  </li>
                  <li className="p-3">
                    <a href=""> Contact </a>
                  </li>
                  <li className="p-3">
                    <a href=""> About </a>
                  </li>
                </ul>
              </nav>
            </div> */}

            <div className="flex flex-col justify-between flex-1 border-r-2">
              <nav>
                <button className="flex items-center px-4 py-2 w-full text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Home</span>
                </button>
                <button
                  className="flex items-center justify-between px-4 py-2 mt-5 w-full text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                  onClick={() => setHiddenUser(!isHiddenUser)}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="mx-4 font-medium">User</span>
                  </div>

                  {!isHiddenUser ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </button>
                {isHiddenUser && (
                  <div>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                  </div>
                )}
                <button
                  className="flex items-center justify-between px-4 py-2 mt-5 w-full text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                  onClick={() => setHiddenGroup(!isHiddenGroup)}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>

                    <span className="mx-4 font-medium">Group</span>
                  </div>
                  {!isHiddenGroup ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </button>
                {isHiddenGroup && (
                  <div>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                  </div>
                )}
                <button
                  className="flex items-center justify-between px-4 py-2 mt-5 w-full text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                  onClick={() => setHiddenBill(!isHiddenBill)}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>

                    <span className="mx-4 font-medium">Billing</span>
                  </div>
                  {!isHiddenBill ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </button>
                {isHiddenBill && (
                  <div>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                    <a
                      className="flex items-center ml-10 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Item 1{' '}
                    </a>
                  </div>
                )}
                {/* <a
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Group</span>
                </a>

                <a
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Billing</span>
                </a> */}

                <hr className="my-6 dark:border-gray-600" />

                <a
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>

                  <span class="mx-4 font-medium">Show All</span>
                </a>
              </nav>
            </div>
          </aside>
        </Transition>
      </div>
    </>
  );
};

export default Sidebar;
