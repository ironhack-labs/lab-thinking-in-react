import { useState } from 'react';

function SearchBar({ filterProductsHandler, filterStockHandler }) {
  const [check, setCheck] = useState(false);
  const [char, setChar] = useState('');

  const handleSearch = (event) => {
    setChar(event.target.value);
    filterProductsHandler(event.target.value);
  };

  const handleCheckbox = (event) => {
    setCheck(event.target.checked);
    filterStockHandler(event.target.checked);
  };

  return (
    <>
      <h3>Search</h3>
      <input id="search-bar" value={char} type="text" onChange={handleSearch} />
      <br />
      <label>
        <input type="checkbox" value={check} onChange={handleCheckbox} />
        Only show products in stock
      </label>
    </>
  );
}

export default SearchBar;