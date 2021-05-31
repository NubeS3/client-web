import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BrowserFile from '../../../components/BrowserFile/BrowserFile';
import BucketFileBrowser from '../../../components/BucketFileBrowser/BucketFileBrowser';
import MasterKeyCard from '../../../components/MasterKeyCard/MasterKeyCard';
import store from '../../../store';
import { getChildrenByPath } from '../../../store/userStorage/bucket';
import StorageFrame from './StorageFrame';

const BrowserContainer = ({
  authToken,
  email,
  bucketList,
  folderChildrenList
}) => {
  const [breadCrumbStack, setBreadCrumbStack] = useState([]);
  const [bucketSelected, setBucketSelected] = useState();
  useEffect(() => {
    // if (bucketList.length === 0) {
    //   store.dispatch(getAllBucket({ authToken, limit: 10, offset: 0 }));
    // }
  }, []);

  useEffect(() => {
    // store.dispatch(
    //   getChildrenByPath({
    //     authToken: authToken,
    //     full_path: "/" + breadCrumbStack.join("/"),
    //   })
    // );
    console.log('/' + breadCrumbStack.join('/'));
  }, [breadCrumbStack]);

  const onSelectBucket = (bucketId, bucketName) => {
    setBucketSelected(bucketId);
    setBreadCrumbStack((breadCrumbStack) => [...breadCrumbStack, bucketName]);
    store.dispatch(
      getChildrenByPath({ authToken: authToken, full_path: '/' + bucketName })
    );
  };

  const onBucketBrowserClick = () => {
    console.log('buckets');
    setBucketSelected(null);
    setBreadCrumbStack([]);
  };
  return (
    <StorageFrame active="browser">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-2xl">
                Browse Files
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between items-center px-2 bg-transparent">
          {bucketSelected ? (
            <BucketFileBrowser
              folderChildrenList={folderChildrenList}
              breadCrumbStack={breadCrumbStack}
              setBreadCrumbStack={setBreadCrumbStack}
              onBucketBrowserClick={onBucketBrowserClick}
            />
          ) : (
            <BrowserFile
              bucketList={bucketList}
              onClick={onSelectBucket}
              breadCrumbStack={breadCrumbStack}
              setBreadCrumbStack={setBreadCrumbStack}
            />
          )}
        </div>
      </div>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const email = state.authen.loginEmail;
  const bucketList = state.bucket.bucketList;
  const folderChildrenList = state.bucket.folderChildrenList;
  console.log(email);
  return {
    authToken,
    email,
    bucketList,
    folderChildrenList
  };
};
export default connect(mapStateToProps)(BrowserContainer);
