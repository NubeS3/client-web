import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from 'recharts';

const months = [
  undefined,
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// uv: value
const data = [
  { name: months[7], uv: 600 },
  { name: months[8], uv: 700 },
  { name: months[9], uv: 400 },
  { name: months[10], uv: 300 },
  { name: months[11], uv: 500 },
  { name: months[12], uv: 100 },
  { name: months[1], uv: 700 },
  { name: months[2], uv: 100 },
  { name: months[3], uv: 200 },
  { name: months[4], uv: 300 },
  { name: months[5], uv: 400 },
  { name: months[6], uv: 600 }
];
const LineChartCard = ({ width = 900, height = 300 }) => {
  return (
    <div className="bg-white dark:bg-gray-800 w-auto shadow-lg mx-auto rounded-xl p-4">
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip />
      </LineChart>
    </div>
  );
};

export default LineChartCard;
