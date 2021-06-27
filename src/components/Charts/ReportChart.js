import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#92288d', '#4061c3', '#00a9e2'];
const OUTTER_RADIUS = 120;
const INNER_RADIUS = 40;

const ReportChart = ({ width = 800, height = 400, data, title }) => {
  const [data1, setData1] = React.useState([]);

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      // <ul>
      //   {payload.map((entry, index) => (
      //     <li key={`item-${index}`}>{entry.value}</li>
      //   ))}
      // </ul>
      <table className="table-auto w-full text-left">
        <thead>
          <th>Transaction</th>
          <th>API</th>
          <th className="text-right">Count</th>
        </thead>
        <tbody>
          {payload.map((entry, index) => (
            <tr>
              <td className="flex items-center">
                <div
                  className="w-2 h-2"
                  style={{ backgroundColor: `${entry.color}` }}
                />
                &nbsp;Class&nbsp;<p className="uppercase">{entry.value}</p>
              </td>
              <td></td>
              <td className="text-right">{data[entry.value]}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td className="text-right">{data['a'] + data['b'] + data['c']}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    setData1(() =>
      Object.keys(data).map((key) => {
        return { name: key, value: data[key] };
      })
    );
  }, [data]);

  return (
    <div className="bg-white dark:bg-gray-800 inline-block shadow-lg mx-auto rounded-md p-4 my-2">
      <p className="ml-6 text-gray-500">{title}</p>
      <PieChart width={width} height={height}>
        <Pie
          data={data1}
          labelLine={false}
          outerRadius={OUTTER_RADIUS}
          innerRadius={INNER_RADIUS}
          fill="#8884d8"
          dataKey="value"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend content={renderLegend} />;
      </PieChart>
    </div>
  );
};

export default ReportChart;
