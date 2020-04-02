import React from 'react'
import {
  Link
} from 'react-router-dom'

import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <Link to="/">
          <h1 className="title">  
            <div className="logo">
              Covid-19
            </div>
            Information Board
          </h1>
        </Link>
        <ul className="nav-link">
          <li><Link to="/">Global</Link></li>
          <li><Link to="/countries">Countries</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>  
        </ul>
      </nav>
    </>
  )
}