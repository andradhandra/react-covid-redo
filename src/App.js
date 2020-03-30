import React, { useState, useEffect } from 'react';
import './App.css';

import Card from './components/Card'
import Axios from 'axios';

function App() {
  let [cases, setCases] = useState([])
  useEffect(() => {
    const fetchCases = () => { 
      Axios({
      url: 'https://covid19.mathdro.id/api',
      method: 'GET'
    })
    .then(({ data }) => {
      setCases(data)
    })
    .catch(err => console.log(err))
    }
  }, [fetchCases])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid-19 Information Board</h1>
        <Card cases={cases}/>
      </header>
    </div>
  );
}

export default App;
