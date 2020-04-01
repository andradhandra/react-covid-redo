import React from 'react'
import '../styles/Chart.css'

import useFetcher from './hooks/fetcher'

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
          
        </ResponsiveContainer>
      </div>
    </div>
  )
}