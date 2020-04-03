import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../components/Card'
import Chart from '../components/Chart'
import { fetchCases } from '../store/actions'


export default function Home() {

  const dispatch = useDispatch()
  const cases = useSelector(state => state.cases)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(fetchCases())
  }, [])

  if (loading) return <h3>Loading...</h3>
  return (
    <section className="Home">
      <Card title="Global" cases={cases} />
      <Chart />
    </section>
  )
}