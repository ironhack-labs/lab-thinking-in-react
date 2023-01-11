import { useState } from 'react';
import './SearchBar.css';

function SearchBar () {
  const [search, setSearch] = useState("");
  
  return(
      <div>
        <h3>Search</h3>
        <input 
             onChange={(e) => {
        setSearch(e.target.value)
        }}
        type="text"
        placeholder="Search product"
               />

      </div>    
  )
}

export default SearchBar;