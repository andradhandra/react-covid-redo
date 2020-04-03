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
      <div className="Card">
        <ResponsiveContainer aspect={1.6}>
          <LineChart
            width={1000}
            height={500}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            data={data}
          >
            <XAxis dataKey="name" />
            <YAxis domain={yDomain} />
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