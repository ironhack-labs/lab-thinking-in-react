import { useState } from 'react';

const SearchBar = ({
  refreshFilteredProducts,
  toggleProductsInStock,
}) => {
  const [searchText, setSearchText] = useState('');
  const [inStock, setInStock] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    refreshFilteredProducts(e.target.value);
  };

  const toggleInStock = (e) => {
    setInStock(e.target.checked);
    toggleProductsInStock(inStock)
    console.log('inStock', inStock)
  };

  return (
    <div>
      <h4>Search</h4>
      <input
        value={searchText}
        onChange={handleChange}
        placeholder="Search..."
      ></input>
      <input name="inStock" onChange={toggleInStock} type="checkbox"></input>
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
