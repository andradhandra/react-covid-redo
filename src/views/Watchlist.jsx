import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/Watchlist.css'

import Card from '../components/Card'

export default function Watchlist() {
  const watchlist = useSelector(state => state.watchlist)

  let cards = `You haven't add any watchlist`
  if (watchlist.length) cards = watchlist.map(country => <Card case={country} />)
  return (
    <section className="Watchlist">
      <h1>Watchlist</h1>
      {cards}
    </section>
  )
}
