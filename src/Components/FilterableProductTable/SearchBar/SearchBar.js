import React, { useState } from 'react';
import './SerachBar.css';

const SearchBar = ({ keyword, setKeyword, setStock, stock }) => {
  const [isChecked, setIsChecked] = useState(false);

  let oldList = stock.filter((product) => {
    return product;
  });

  let newList = stock.filter((product) => {
    return product.stocked === true;
  });
  console.log(newList);
  console.log(oldList);

  console.log(isChecked);

  const handleInputchange = (event) => {
    if (isChecked) {
      setStock(oldList);
    }
    if (!isChecked) {
      setStock(newList);
    }
    setIsChecked(!isChecked);
  };

  let Checkbox = () => (
    <input
      type="checkbox"
      name="checkboxName"
      id="ShowOnlyStock"
      checked={isChecked}
      onChange={handleInputchange}
    />
  );

  return (
    <div className="searchBar">
      <h3>Search</h3>
      <input
        className="bar"
        key="random1"
        value={keyword}
        placeholder={'Search Product'}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div>
        <label>
          <Checkbox />
          <p>Only show products on stock</p>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
