import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import StorageFrame from './StorageFrame';
import LineChartCard from '../../../components/Charts/LineChartCard';
import ReportChart from '../../../components/Charts/ReportChart';
import TotalSection from '../../../components/Charts/TotalSection';
import store from '../../../store';
import {
  getAverageStoredFiles,
  getAvgGBStored,
  getMonthUsageBandwidth,
  reportActions
} from '../../../store/user/bandwidthReport';
import { getReportCurrentMonth } from '../../../store/user/bandwidthReport';
import ProgressBar from '@ramonak/react-progress-bar';
import Spinner from '../../../components/Spinner';

const ReportContainer = ({
  authToken,
  monthlyBandwidth,
  avgStoredFiles,
  avgGBStored,
  report,
  reportLoadProgress,
  loading
}) => {
  useEffect(() => {
    store.dispatch(getMonthUsageBandwidth({ authToken: authToken }));
    store.dispatch(getAverageStoredFiles({ authToken: authToken }));
    store.dispatch(getAvgGBStored({ authToken: authToken }));
    store.dispatch(getReportCurrentMonth({ authToken: authToken }));
  }, []);

  useEffect(() => {
    if (!loading) {
      store.dispatch(reportActions.clearReportState());
    }
    return () => {};
  }, [loading]);

  return (
    <StorageFrame active="report">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-4xl">
                Reports
              </div>
            </div>
          </div>
        </header>
        <p className="text-gray-500 dark:text-white text-md my-10">
          Reports are updated once a day at midnight GMT.
        </p>
        <div className="flex flex-col justify-between items-center px-2 bg-gray-100">
          {reportLoadProgress < 8 ? (
            <div className="w-full h-20 my-2">
              <Spinner />
            </div>
          ) : null}
          {/* <MonthlyTransaction /> */}
          <TotalSection
            title="MONTHLY TOTALS"
            data={{
              avgGBStored: avgGBStored,
              monthlyBandwidth: monthlyBandwidth,
              transaction: report
            }}
          />
          <ReportChart title="REQUEST COUNTING" data={report} />
          <LineChartCard title="AVG GB STORED" data={avgGBStored} />
          <LineChartCard title="GB DOWNLOADED" data={monthlyBandwidth} />
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
  const avgGBStored = state.bandwidthReport.avgGBStored;
  const report = state.bandwidthReport.report;
  const reportLoadProgress = state.bandwidthReport.reportLoadProgress;
  return {
    authToken,
    monthlyBandwidth,
    avgStoredFiles,
    avgGBStored,
    report,
    reportLoadProgress
  };
};

export default connect(mapStateToProps)(ReportContainer);
