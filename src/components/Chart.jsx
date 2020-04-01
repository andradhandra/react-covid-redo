import React from 'react'
import '../styles/Chart.css'

// import useFetcher from './hooks/fetcher'

import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

export default function Chart() {
  return (
    <div className="Chart">
      <h1>Statistic by date</h1>
      <div className="Card">
        <ResponsiveContainer aspect={1.6}>
          <LineChart
            width={1000}
            height={500}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            data={null}
          >
            <XAxis dataKey="name" />
            <YAxis domain={null} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone"
              dataKey="cases"
              stroke="#8884d8"
              strokeWidth="3"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}