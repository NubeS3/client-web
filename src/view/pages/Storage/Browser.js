import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router';
import BucketBrowser from '../../../components/BrowserFile/BucketBrowser';
import BucketFileBrowser from '../../../components/BucketFileBrowser/BucketFileBrowser';
import paths from '../../../configs/paths';
import { clearBucketState } from '../../../store/userStorage/bucket';
import StorageFrame from './StorageFrame';

const BrowserContainer = ({
  authToken,
  bucketList,
  folderChildrenList,
  fetchingFailed,
  fetchingSucceeded
}) => {
  const history = useHistory();
  // const [loading, setLoading] = useState(true);
  const match = useRouteMatch();
  useEffect(() => {
    // if (bucketList.length === 0) {
    //   store.dispatch(getAllBucket({ authToken, limit: 10, offset: 0 }));
    // }
  }, []);

  useEffect(() => {
    if (fetchingSucceeded) {
      // setLoading(false);
      clearBucketState();
    }
    if (fetchingFailed) {
      // setLoading(false);
      clearBucketState();
    }
  }, [fetchingFailed, fetchingSucceeded]);

  const onSelectBucket = (item) => {
    // setBucketSelected(bucketId);
    // setBreadCrumbStack((breadCrumbStack) => [...breadCrumbStack, bucketName]);
    // store.dispatch(
    //   getChildrenByPath({ authToken: authToken, full_path: '/' + bucketName })
    // );
    history.push({
      pathname: `${paths.STORAGE_BROWSER}/${item.bucket.id}`,
      state: { data: item }
    });
  };

  return (
    <StorageFrame active="browser">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-4xl">
                Browse Files
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between items-center px-2 bg-transparent">
          <Switch>
            <Route exact path={match.url}>
              <BucketBrowser
                bucketList={bucketList}
                onClick={onSelectBucket}
                // breadCrumbStack={breadCrumbStack}
                // setBreadCrumbStack={setBreadCrumbStack}
              />
            </Route>
            <Route path={match.url + `/:id`}>
              <BucketFileBrowser
                authToken={authToken}
                items={folderChildrenList}
                // breadCrumbStack={breadCrumbStack}
                // setBreadCrumbStack={setBreadCrumbStack}
                // onBucketBrowserClick={onBucketBrowserClick}
                // bucketSelected={bucketSelected}
              />
            </Route>
          </Switch>
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
  const fetchingFailed = state.bucket.fetchingFailed;
  const fetchingSucceeded = state.bucket.fetchingSucceeded;
  return {
    authToken,
    email,
    bucketList,
    folderChildrenList,
    fetchingFailed,
    fetchingSucceeded
  };
};
export default connect(mapStateToProps)(BrowserContainer);
