import { useState } from 'react';
import jsonData from '../data.json';

function SearchBar () {
  const [search, setSearch] = useState(jsonData);
  
  return(
      <div>
        <h1>SearchBar</h1>
      </div>    
  )
}

export default SearchBar;