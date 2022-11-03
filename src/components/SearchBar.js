import { useState } from 'react';

export const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [checkInStock, setCheckInStock] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    props.handleSearch(event);
    setSearchInput(event.target.value);
  };

  const handleCheck = (event) => {
    props.handleCheck(event.target.checked);
    setCheckInStock(event.target.checked);
  };

  return (
    <div>
      <h3>Search</h3>
      <input
        className="search-bar"
        type="search"
        value={searchInput}
        onChange={handleSearch}
      />
      <div>
        <input type="checkbox" checked={checkInStock} onChange={handleCheck} />{' '}
        Only show products in stock
      </div>
    </div>
  );
};
