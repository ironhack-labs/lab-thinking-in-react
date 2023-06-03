import { useState } from 'react';

function SearchBar({ filterProducts }) {
  const [products, setProducts] = useState('');
  const newSearch = (event) => {
    const inputValue = event.target.value;
    setProducts(inputValue);
    filterProducts(inputValue);
  };


return (
  <div>
    <h2>Search</h2>
    <input type="submit" value="Buscar"></input>

    <input
      type="text"
      value={products}
      onChange={newSearch}
      placeholder="Buscar..."
    />
    <h3>
      <input type="checkbox" />
      Only show products in stock
    </h3>
  </div>
);}

export default SearchBar;
