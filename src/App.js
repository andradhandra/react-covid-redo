import React from 'react';
import './styles/App.css';

import Card from './components/Card'
import Navbar from './components/Navbar'
import Chart from './components/Chart';

import useFetcher from './hooks/fetcher'

function App() {
  const { data: cases, loading, error } = useFetcher('/')

  if (loading) return <h3>loading...</h3>
  if (error) return <h3>Error...</h3>
  return (
    <div className="App">
      <Navbar />
      <section className="App-content">
        <Card title="Global" cases={cases} />
        <Chart />
      </section>
    </div>
  );
}

export default App;
