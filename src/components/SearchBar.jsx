import { useState } from 'react';

function SearchBar(props) {
  const [searchBar, setSearchBar] = useState('');
  const [inStock, setInStock] = useState(false);

  function handleSearch(event) {
    setSearchBar(event.target.value);
    props.handleFilterProducts(event.target.value);
  }

  function handleInStockItems(event) {
    setInStock(event.target.checked);
    props.handleInStock(event.target.checked);
  }

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input onChange={handleSearch} type="text" value={searchBar} />

      <input
        onChange={handleInStockItems}
        type="checkbox"
        id="inStock"
        checked={inStock}
      />
      <label htmlFor="inStockOnly">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
