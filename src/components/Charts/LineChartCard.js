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

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 380, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 201, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 100, pv: 2400, amt: 2400 }
];
const LineChartCard = (props) => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
    </LineChart>
  );
};

export default LineChartCard;
