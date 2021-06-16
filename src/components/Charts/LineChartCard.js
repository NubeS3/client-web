import React from 'react';
import {
  LineChart,
  Line,
  Label,
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

// uv: value => change to whatever
// const data = [
//   { name: months[7], uv: 600 },
//   { name: months[8], uv: 700 },
//   { name: months[9], uv: 400 },
//   { name: months[10], uv: 300 },
//   { name: months[11], uv: 500 },
//   { name: months[12], uv: 100 },
//   { name: months[1], uv: 700 },
//   { name: months[2], uv: 100 },
//   { name: months[3], uv: 200 },
//   { name: months[4], uv: 300 },
//   { name: months[5], uv: 400 },
//   { name: months[6], uv: 600 }
// ];

const LineChartCard = ({ width = 800, height = 400, title, data, yLabel }) => {
  const CustomTooltip = ({ payload, active }, ...props) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return <p>{`${payload[0].value} MB`}</p>;
    }
    return null;
  };

  <Tooltip content={<CustomTooltip />} />;

  return (
    <div className="bg-white dark:bg-gray-800 inline-block shadow-lg mx-auto rounded-md p-4 my-2">
      <p className="ml-6 text-gray-500">{title}</p>
      {/* <div className=" items-center"> */}
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 25, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="usage" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month">
          <Label offset={0} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            // value: 'Bandwidth usage (MB)',
            angle: -90,
            position: 'insideLeft'
          }}
        />
        <Legend />
        <Tooltip />
      </LineChart>
      {/* </div> */}
    </div>
  );
};

export default LineChartCard;