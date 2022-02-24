import { useState } from 'react';

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const executeSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery)
    props.searchProducts(event.target.value);
  };

  return (
    <div className="search-bar">
      <>
        <h3>Search</h3>

        <label>Search</label>
        <input
          value={searchQuery}
          type="text"
          onChange={executeSearch}
          placeholder="Search..."
        />
      </>
    </div>
  );
}

export default SearchBar;
