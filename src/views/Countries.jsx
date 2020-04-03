import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../styles/Countries.css'

import CountryRow from '../components/CountryRow'
import { fetchCountries } from '../store/actions'

export default function Countries() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch, countries])

  if (loading) return <h3>Loading...</h3>
  return (
    <section className="Countries">
      <h1>Countries</h1>
      <div className="country-list">
        {countries.countries && countries.countries.map((country, i) => <CountryRow country={country} key={i} />)}
      </div>
    </section>
  )
}