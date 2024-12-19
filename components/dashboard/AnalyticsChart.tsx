'use client';

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', view: 25, sale: 88 },
  { month: 'Feb', view: 52, sale: 72 },
  { month: 'Mar', view: 60, sale: 80 },
  { month: 'Apr', view: 69, sale: 95 },
  { month: 'May', view: 72, sale: 92 },
  { month: 'Jun', view: 78, sale: 82 },
  { month: 'Jul', view: 83, sale: 100 },
  { month: 'Aug', view: 50, sale: 88 },
  { month: 'Sep', view: 40, sale: 110 },
  { month: 'Oct', view: 30, sale: 90 },
  { month: 'Nov', view: 20, sale: 62 },
  { month: 'Dec', view: 10, sale: 65 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-[#0F172A] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Property View</h2>
        <div className="text-gray-400">
          <button className="p-1">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barGap={6}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis 
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8' }}
              domain={[0, 120]}
              ticks={[0, 20, 40, 60, 80, 100, 120]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
              itemStyle={{ color: '#fff' }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            />
            <Bar 
              dataKey="view" 
              name="View"
              fill="#7C3AED"
              radius={[4, 4, 0, 0]}
            />
            {/* <Bar 
              dataKey="sale" 
              name="Sale"
              fill="#EAB308"
              radius={[4, 4, 0, 0]}
            /> */}
            <Legend 
              wrapperStyle={{
                paddingTop: '20px'
              }}
              iconType="circle"
              formatter={(value) => {
                return <span style={{ color: '#94A3B8' }}>{value}</span>;
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;