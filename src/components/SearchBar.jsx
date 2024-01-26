import { useState } from 'react';

function SearchBar(props) {
  const { products, setProducts, fullList } = props;

  // make state for each input
  const [isChecked, setIsChecked] = useState(false);
  const [searchFilterProducts, setSearchFilterProducts] = useState(fullList);

  /* I HAD A BIG REFERENCING PROBLEM:

I can decide if I want to have both filters working at the same time 
and the input one not correctly, or to have only each one working correctly,
but not correctly at the same time.

Problem is which array I am using as a reference to filter in the handleSearchBar function.
fullList.filter = filterProducts alone works correctly
products.filter = filterProducts and checkbox work at the same time, but not filterProducts individually.

ODD SOLUTION:

I made a state for the checkbox to compare in the search bar filter function if the box is checked.
So I can only filter the ones that are in stock using the search bar.
Then I made another state only for the products that are filtered by the search bar.
So this can be used as a reference for the checkbox to filter out those not in stock.

I don't think this is really good... but it works.

*/

  //   FUNCTION for filtering with search bar
  const handleSearchBar = (inputString) => {
    if (!isChecked) {
      const filteredAllProducts = fullList.filter((product) => {
        return product.name.startsWith(inputString);
      });
      setProducts(filteredAllProducts);
      setSearchFilterProducts(filteredAllProducts);
    } else {
      const filteredCheckedProducts = products.filter((product) => {
        return product.name.startsWith(inputString);
      });
      setProducts(filteredCheckedProducts);
    }
  };

  // FUNCTION for filtering with checkbox
  const handleInStock = (isChecked) => {
    setIsChecked(isChecked);
    //console.log(isChecked);
    if (isChecked) {
      const productsInStock = products.filter((product) => {
        return product.inStock;
      });
      setProducts(productsInStock);
    } else {
      setProducts(searchFilterProducts);
    }
  };

  return (
    <div id="search-bar-component">
      <label htmlFor="searchBar" id="search-bar-label">
        Search
      </label>
      <input
        type="text"
        name="searchBar"
        id="search-bar-input"
        onChange={(event) => {
          handleSearchBar(event.target.value);
        }}
      />

      <div id="checkbox-container">
        <input
          type="checkbox"
          name="checkBox"
          id="check-box"
          onChange={(event) => {
            handleInStock(event.target.checked);
          }}
        />
        <label htmlFor="checkBox" id="check-box-label">
          {' '}
          only show products in stock
        </label>
      </div>
    </div>
  );
}
export default SearchBar;
