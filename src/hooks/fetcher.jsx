import { useState, useEffect } from 'react'
import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://covid19.mathdro.id/api',
    timeout: 60000,
  })

export default function useFetcher(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    Axios({
      url,
      method: 'GET'
    })
      .then(({ data }) => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [url]) 

  return { data, loading, error }
}