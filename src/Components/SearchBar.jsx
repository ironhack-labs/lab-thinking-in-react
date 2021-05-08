import React, { useState } from 'react'

const SearchBar = ({filterFunction}) => {

  const [stockCheck, setStockCheck] = useState(false);

  const inputFilterHandler = (event) => {
    filterFunction(event.target.value);
  }

  const checkValueHandler = () => {
    setStockCheck(!stockCheck);
    console.log(stockCheck);
  }

  return (
    <div className="section-container">
      <input type="text" name="search" placeholder="seach for a product" onChange={inputFilterHandler} />
      
      <div className="checkbox-container">
        <input type="checkbox" name="inStock" onChange={checkValueHandler} />
        <label for="inStock">Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;