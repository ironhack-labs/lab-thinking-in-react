import productsJSON from './../data.json';
import { useState } from 'react';

function SearchBar() {
  const [products, setProducts] = useState(productsJSON);

/* const handleSearch = (event) => {
    setProducts(event.target.value);
} */

  return (
    <div className="search-bar">
      <>
        <h3>Search</h3>

        <label>Search</label>
        <input
          value={''}
          type="text"
          /* onChange={handleSearch}
          placeholder={"Search for products"} */
        />
      </>
    </div>
  );
}

export default SearchBar;
