import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function Graphic({ forecast, localeNotFound }) {
  return (
    <LineChart
      width={700}
      height={300}
      data={localeNotFound ? localeNotFound : forecast}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <Line
        type="monotone"
        dataKey={`thermal_sensation.max`}
        stroke="#000FFF"
        activeDot={{ r: 10 }}
      />
      <Line
        type="monotone"
        dataKey={`thermal_sensation.min`}
        stroke="#ff0000"
        activeDot={{ r: 10 }}
      />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <YAxis />
      <XAxis dataKey="day" />
    </LineChart>
  );
}
