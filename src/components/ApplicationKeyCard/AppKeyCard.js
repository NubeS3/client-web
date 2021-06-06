import React from 'react';
import store from '../../store';
import { deleteAppKey } from '../../store/userStorage/appKey';

const AppKeyCard = ({ authToken, appKey }) => {
  const handleDeleteAppKey = (id) => {
    store.dispatch(deleteAppKey({ authToken: authToken, id: id }));
  };
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col mx-auto justify-center w-full max-w-4xl py-4 px-8 bg-white shadow rounded-sm text-gray-600">
        <div className="grid grid-cols-3">
          <div className="mt-4">
            <p className="text-gray-500">keyID:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="key-id">
              {appKey ? appKey.id : '-'}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">keyName:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="key-name">
              {appKey ? appKey.name : '-'}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">bucketName:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="bucket-name">
              {appKey ? (
                <>
                  {appKey.bucket_id === '*' ? 'All' : <>{appKey.bucket_id}</>}
                </>
              ) : (
                '-'
              )}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">capabilities:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="capabilities">
              {appKey ? appKey.permissions.join(', ') : '-'}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">expiration:</p>
          </div>
          <div className="col-span-2 mt-6">
            {appKey ? (
              <>
                {appKey.expired_date === '0001-01-01T00:00:00Z' ? (
                  <p className="text-black" id="expiration">
                    Never
                  </p>
                ) : (
                  <p className="text-black" id="expiration">
                    {appKey.expired_date}
                  </p>
                )}
              </>
            ) : (
              <p className="text-black" id="expiration">
                '-'
              </p>
            )}
          </div>
          <div className="mt-6">
            <p className="text-gray-500">namePrefix:</p>
          </div>
          <div className="col-span-2 mt-6">
            <p className="text-black" id="name-prefix">
              {appKey ? (
                <>
                  {appKey.file_name_prefix_restrict === '' ? (
                    '(none)'
                  ) : (
                    <>{appKey.file_name_prefix_restrict}</>
                  )}
                </>
              ) : (
                '-'
              )}
            </p>
          </div>
          <div />
          <div />
          <div className=" mt-6 justify-items-end">
            <button
              onClick={() => handleDeleteAppKey(appKey.id)}
              class="px-4 py-2 text-base rounded text-red-500 border border-red-500 undefined"
            >
              Delete Key
            </button>
          </div>
          <div />

          <div />
        </div>
      </div>

      <br />
      {
        // showCard
        //   && <MasterKeyCardCreated />
      }
    </div>
  );
};

export default AppKeyCard;
