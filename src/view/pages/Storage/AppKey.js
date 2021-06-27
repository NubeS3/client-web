import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AppKeyCard from '../../../components/ApplicationKeyCard/AppKeyCard';
import MasterKeyCard from '../../../components/MasterKeyCard/MasterKeyCard';
import StorageFrame from './StorageFrame';
import CreateApplicationKey from '../../../components/CreateApplicationKey';
import { getAppKey } from '../../../store/userStorage/appKey';
import store from '../../../store';
import { getAllBucket } from '../../../store/userStorage/bucket';
import MasterKeyCardCreated from '../../../components/MasterKeyCard/MasterKeyCardCreated';
const AppKeyContainer = ({
  authToken,
  masterKey,
  appKeyList,
  bucketList,
  newCreatedKey
}) => {
  const [showCard, setShowCard] = React.useState(false);
  useEffect(() => {
    if (bucketList.length === 0) {
      store.dispatch(getAllBucket({ authToken, limit: 10, offset: 0 }));
    }
    store.dispatch(getAppKey({ authToken: authToken }));
    return () => {};
  }, []);
  return (
    <StorageFrame active="appkey">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-4xl">
                Application Key
              </div>
            </div>
          </div>
        </header>
        <p className="text-gray-500 dark:text-white text-md my-10">
          Application keys are used as a pair: Key ID and Application Key. This
          allows Nubes3 to communicate securely with different devices or apps.
          Once you generate your Master Application Key, this key has full
          capabilities. Create your own Application Keys to limit features like
          read/write.
          <a className="text-blue-500 cursor-pointer">Learn more.</a>.
        </p>
        <div className="flex flex-col justify-center items-center py-2 px-2 bg-gray-100">
          <MasterKeyCard
            authToken={authToken}
            masterKey={masterKey}
            setShowCard={setShowCard}
          />
          {showCard ? <MasterKeyCardCreated appKey={newCreatedKey} /> : null}
          <CreateApplicationKey
            authToken={authToken}
            bucketList={bucketList || []}
            setShowCard={setShowCard}
          />
          <p className="w-full max-w-4xl my-2 mx-2">Your Application Keys</p>
          {appKeyList
            ? appKeyList.map((appKey) => (
                <AppKeyCard authToken={authToken} appKey={appKey} />
              ))
            : null}
        </div>
      </div>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const masterKey = state.appKey.masterKey;
  const appKeyList = state.appKey.appKeyList;
  const bucketList = state.bucket.bucketList;
  const newCreatedKey = state.appKey.newCreatedKey;
  return {
    authToken,
    masterKey,
    appKeyList,
    bucketList,
    newCreatedKey
  };
};
export default connect(mapStateToProps)(AppKeyContainer);
