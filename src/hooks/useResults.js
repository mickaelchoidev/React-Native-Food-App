import { useState, useEffect } from 'react'
import Yelp from '../api/Yelp'


export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, /* term: term */
          location: 'Paris'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage]
}
