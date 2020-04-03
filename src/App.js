import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './styles/App.css'

import Countries from './views/Countries'
import Watchlist from './views/Watchlist'
import Home from './views/Home'
import Navbar from './components/Navbar'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <section className="App-content">
          <Switch>
            <Route path="/watchlist">
              <Watchlist />
            </Route>
            <Route path="/countries">
              <Countries />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App;
