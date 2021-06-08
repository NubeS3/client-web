import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StorageFrame from './StorageFrame';
import MonthlyTransaction from '../../../components/Charts/MonthlyTransaction';
import LineChartCard from '../../../components/Charts/LineChartCard';
import store from '../../../store';
import {
  getAverageStoredFiles,
  getMonthUsageBandwidth
} from '../../../store/user/bandwidthReport';

const ReportContainer = ({ authToken, monthlyBandwidth, avgStoredFiles }) => {
  useEffect(() => {
    store.dispatch(getMonthUsageBandwidth({ authToken: authToken }));
    store.dispatch(getAverageStoredFiles({ authToken: authToken }));
    return () => {};
  }, []);
  return (
    <StorageFrame active="report">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-2xl">
                Reports
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between items-center px-2 bg-gray-100">
          {/* <MonthlyTransaction /> */}
          <LineChartCard title="AVG GB STORED" data={monthlyBandwidth} />
          <LineChartCard title="GB DOWNLOADED" />
          <LineChartCard title="AVG STORED FILES" data={avgStoredFiles} />
        </div>
      </div>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const monthlyBandwidth = state.bandwidthReport.monthlyBandwidth;
  const avgStoredFiles = state.bandwidthReport.avgStoredFiles;
  return {
    authToken,
    monthlyBandwidth,
    avgStoredFiles
  };
};

export default connect(mapStateToProps)(ReportContainer);
