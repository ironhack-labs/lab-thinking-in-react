import { useState } from 'react';

function SearchBar(props) {
  const [searchBar, setSearchBar] = useState('');

  function handleSearch(event) {
    setSearchBar(event.target.value);
    props.handleFilterProducts(event.target.value);
  }

  return (
    <div>
      <input onChange={handleSearch} type="text" value={searchBar} />
    </div>
  );
}

export default SearchBar;
