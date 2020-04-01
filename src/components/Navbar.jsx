import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <h1 className="title">
          <div className="logo">
            Covid-19
          </div>
          Information Board
        </h1>
        <ul>
          <li><button>Global</button></li>
          <li><button>Countries</button></li>
          <li><button>Watchlist</button></li>  
        </ul>
      </nav>
    </>
  )
}