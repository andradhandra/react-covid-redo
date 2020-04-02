import React from 'react'

import Card from '../components/Card'
import Chart from '../components/Chart'

import useFetcher from '../hooks/fetcher'

export default function Home() {
  const { data: cases, loading, error } = useFetcher('/')

  if (loading) return <h3>loading...</h3>
  if (error) return <h3>Error...</h3>
  return (
    <section className="Home">
      <Card title="Global" cases={cases} />
      <Chart />
    </section>
  )
}