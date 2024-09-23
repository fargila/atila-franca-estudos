import SearchBar from './components/SearchBar'
import PhotoList from './components/PhotoList'
import AmplifiedPhoto from './components/AmplifiedPhoto'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [photos, setPhotos] = useState([])
  const [amplifiedPhoto, setAmplifiedPhoto] = useState(null)
  const [activateSearch, setActivateSearch] = useState(false)

  const fetchData = async ({ query, category }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    if(query || category) {
      let searchQuery = query
      if(query & category) {
        searchQuery = `${query} ${category}`
      }
      else if(category) {
        searchQuery = category
      }
      const response = await axios.get('https://api.unsplash.com/search/photos/', {
        params: {
          client_id: apiKey,
          query: searchQuery
        }
      })

      setPhotos(response.data.results)
    }

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 10
      }
    })

    setPhotos(response.data)

    return
  }

  useEffect(() => {
    fetchData(query, category)
  }, [])

  useEffect(() => {
    if(activateSearch) {
      fetchData({ query, category })
      setActivateSearch(false)
    }
  }, [activateSearch])


  return (
    <>
    <div className='container'>
      <SearchBar setQuery={setQuery} setCategory={setCategory} setActivateSearch={setActivateSearch}/>
      <PhotoList photos={photos} setAmplifiedPhoto={setAmplifiedPhoto}/>
      {amplifiedPhoto && (<AmplifiedPhoto photo={AmplifiedPhoto} setAmplifiedPhoto={setAmplifiedPhoto}/>)}
    </div>
    </>
  )
}

export default App
