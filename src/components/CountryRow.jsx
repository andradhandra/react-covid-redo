import React from 'react'
import { useDispatch } from 'react-redux'
import ReactCountryFlag from 'react-country-flag'
import { addWatchlist } from '../store/actions'

export default function CountryRow(props) {
  const dispatch = useDispatch()
  const { country } = props
  // const watchlist = useSelector(state => state.watchlist)
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addWatchlist(country.name, country.iso2))
  } 
  return (
    <div className="country-row">
      <div className="country-name">
        <ReactCountryFlag 
          countryCode={country.name ? country.iso2 : 'UN'} 
          svg
          style={{
            height: '3vh',
            width: '3vw',
            padding: '3vh 2vw'
          }}
        />
        <p>{country.name? country.name : 'country'}</p>
      </div>
      <div className="watchlist-button">
        <button onClick={handleClick}>+ Watchlist</button>
      </div>
    </div>
  )
}