import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
  timeout: 60000,
})

export const SET_CASES = (cases) => ({
  type: 'SET_CASES',
  payload: cases
})

export const SET_DAILY = (dialy) => ({
  type: 'SET_DAILY',
  payload: dialy
})

export const SET_COUNTRIES = (countries) => ({
  type: 'SET_COUNTRIES',
  payload: countries
})

export const SET_COUNTRY = (country) => ({
  type: 'SET_COUNTRY',
  payload: country
})

export const ADD_WATCHLIST = (watchlist) => ({
  type: 'ADD_WATCHLIST',
  payload: watchlist
})

export const REMOVE_WATCHLIST = (watchlist) => ({
  type: 'REMOVE_WATCHLIST',
  payload: watchlist
})

export const SET_LOADING = () => ({
  type: 'SET_LOADING'
})

export const fetchCases = () => async (dispatch) => {
  const { data: cases } = await Axios({
      url: '/',
      method: 'GET'
    })
  dispatch(SET_CASES(cases))
}

export const fetchDaily = () => async (dispatch) => {
  const { data: daily } = await Axios({
    url: '/daily',
    method: 'GET'
  })
  dispatch(SET_DAILY(daily))
}

export const fetchCountries = () => async (dispatch) => {
  const { data: countries } = await Axios({
    url: '/countries',
    method: 'GET'
  })
  dispatch(SET_COUNTRIES(countries))
}

export const fetchCountry = (countryCode) => async (dispatch) => {
  const { data: country } = await Axios({
    url: `/countries/${countryCode}`,
    method: 'GET'
  })
  dispatch(SET_COUNTRY(country))
}

export const addWatchlist = (countryName, countryCode) => (
  async (dispatch) => {
    const { data: country } = await Axios({
      url: `/countries/${countryCode}`,
      method: 'GET'
    })
    country.name = countryName
    dispatch(ADD_WATCHLIST(country))
  }
)
