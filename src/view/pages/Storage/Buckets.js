import React, { useState } from 'react';
import { connect } from 'react-redux';
import BucketCard from '../../../components/BucketCard/BucketCard';
import CreateBucket from '../../../components/Dialog/Bucket/CreateBucket';
const BucketContainer = ({ email }) => {
  const [showCreateCard, setShowCreateCard] = useState(false);

  const createCardClick = () => {
    setShowCreateCard(!showCreateCard);
  };

  return (
    <>
      {showCreateCard ? <CreateBucket /> : null}
      <main className="h-screen hidden lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-3xl">
                Nubes3 Cloud Storage Buckets
              </div>
              <button onClick={createCardClick}>Button</button>
            </div>
          </div>
        </header>
        <div>
          <BucketCard />
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  const email = state.authen.loginEmail;
  console.log(email);
  return {
    email
  };
};
export default connect(mapStateToProps)(BucketContainer);
