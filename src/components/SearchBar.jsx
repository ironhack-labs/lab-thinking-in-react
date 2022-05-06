import { useState } from 'react';

function SearchBar(props) {

  const [searchTerm, setSearchTerm] = useState('')
  const [tickBox, setTickBox] = useState(false)

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    props.handleSearch(event.target.value);
  }

  // Incomplete bonus work - "in-stock tick-box toggle"
  // const handleInStockCheck = event => {

  // }

  return (
    <div className="search">
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={searchTerm} onChange={handleSearch} />
      <div className="search-checkbox">
        <input type="checkbox" /><span>Only show products in stock</span>
      </div>
    </div>
  )

}

export default SearchBar;