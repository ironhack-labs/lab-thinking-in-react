import React, { useState } from 'react';
import './SearchBar.css';
// import ProductTable from '../producttable/ProductTable';

function SearchBar() {
  const [searchProduct, setSearchProduct] = useState({ productName: '' });

  function handleSearchStatus(event) {
    const copy = { ...searchProduct };
    console.log(copy);
    copy[event.target.name] = event.target.value;
    setSearchProduct(copy);
  }
  // const filteredProduct = searchProduct.filter((product) => {
  //   return product.name
  //     .toLocaleLowerCase()
  //     .includes(searchProduct.productName.toLocaleLowerCase());
  // });

  return (
    <form className="searchContainer" action="">
      <label htmlFor="">Search</label>
      <input
        type="text"
        name="productName"
        onChange={handleSearchStatus}
        value={searchProduct.productName}
        placeholder="Type any product"
      />
    </form>
  );
}

export default SearchBar;
