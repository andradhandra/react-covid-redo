const initialState = {
  cases : {},
  daily : [],
  countries : {},
  country : [],
  watchlist : [],
  loading : false
}

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CASES':
      return { ...state, cases: payload }
    case 'SET_DAILY':
      return { ...state, daily: payload }
    case 'SET_COUNTRIES':
      return { ...state, countries: payload }
    case 'SET_COUNTRY':
      return { ...state, country: payload }
    case 'ADD_WATCHLIST':
      return { ...state, watchlist: state.watchlist.concat(payload) }
    case 'REMOVE_WATCHLIST':
      let watchlist = state.watchlist
      const removeIndex = watchlist.findIndex(country => country.name = payload)
      watchlist.splice(removeIndex, 1)
      return { ...state, watchlist }
    case 'SET_LOADING':
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}

export default reducers