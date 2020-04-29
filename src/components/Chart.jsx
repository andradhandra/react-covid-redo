import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/Chart.css'

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
import { fetchDaily } from '../store/actions'

export default function Chart() {
  const dispatch = useDispatch()
  const daily = useSelector(state => state.daily)

  useEffect(() => {
    dispatch(fetchDaily())
  }, [dispatch, daily])
  let data = []
  let yDomain = []
  if (daily.length) {
    data = daily.map(day => {
      return {
      name: new Date(day.reportDate).toLocaleDateString('id'),
      cases:  day.totalConfirmed 
    }})

    yDomain = [Math.min(data.totalConfirmed), Math.max(data.totalConfirmed)]
  }
  return (
    <div className="Chart">
      <h1>Total confirmed case to date</h1>
      <div className="ChartContainer">
        <ResponsiveContainer aspect={2}>
          <LineChart
            width={800}
            height={300}
            margin={{ top: 30, right: 20, left: 30, bottom: 20 }}
            data={data}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 14 }} 
              label={{ value:'Date', position: 'insideBottomRight', offset: -10, fontSize: 20, style: { fill: 'grey' } }} 
            />
            <YAxis 
              domain={yDomain} 
              tick={{ fontSize: 14 }} 
              label={{ value:'Total cases', position: 'insideTopLeft', offset: -25, fontSize: 20, style: { fill: 'grey' } }}
            />
            <CartesianGrid strokeDasharray="5 3" />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone"
              dataKey="cases"
              stroke="#21e6c1"
              strokeWidth="3"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}