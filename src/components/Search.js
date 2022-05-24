import { useState } from 'react'
import './Search.css'

const Search = ({ setFilter }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    const trimmed = event.target.value.trim()

    setSearchTerm(trimmed)
    setFilter(trimmed)
  }

  return (
    <div className="searchBarContainer">
      <span className="searchIcon">🔎</span>
      <input
        className="searchBar"
        onChange={onInputChange}
        value={searchTerm}
        placeholder="Find an item in your list"
      />
    </div>
  )
}

export default Search
