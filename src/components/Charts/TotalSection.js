import React from 'react';

import storageImg from '../../assets/storage.png';
import downloadImg from '../../assets/download.png';
import transactionImg from '../../assets/transactions.png';

const TotalSection = ({
  width = 800,
  title,
  data = {
    avgGBStored: [],
    monthlyBandwidth: [],
    transaction: {}
  }
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 inline-block shadow-lg mx-auto rounded-md p-4 my-2">
      <p className="ml-6 text-gray-500">{title}</p>
      <div style={{ width: width }}>
        <div className="grid grid-cols-3 divide-x divide-gray-500">
          <div className="flex w-full px-6 justify-between">
            <div className="flex flex-col items-start">
              <p className="font-bold" style={{ color: '#561c85' }}>
                {data?.avgGBStored.reduce((a, b) => a + b.usage, 0)}
              </p>
              <p className="text-xs">Average GB Storrage</p>
            </div>
            <div className="w-8 h-8">
              <img src={storageImg} />
            </div>
          </div>
          <div className="flex w-full px-6 justify-between">
            <div className="flex flex-col items-start">
              <p className="font-bold" style={{ color: '#96328c' }}>
                {data?.monthlyBandwidth.reduce((a, b) => a + b.usage, 0)}
              </p>
              <p className="text-xs">GB Downloaded</p>
            </div>
            <div className="w-8 h-8">
              <img src={downloadImg} />
            </div>
          </div>
          <div className="flex w-full px-6 justify-between">
            <div className="flex flex-col items-start">
              <p className="font-bold" style={{ color: '#05aadc' }}>
                {data
                  ? data.transaction['a'] +
                    data.transaction['b'] +
                    data.transaction['c']
                  : 0}
              </p>
              <p className="text-xs">Transactions</p>
            </div>
            <div className="w-8 h-8">
              <img src={transactionImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
