import React from 'react';

const SearchBar = (props) => {
  console.log(`Props on Searchbar`, props)

  const changeProductListingHandler = event => {
    // Get value from User Input
    const { value } = event.target;
    // Lifting up: Passing on data (value) from children (SearchBar) to parent (Filterable Product Table) via  same function `handleQuery()`
    props.handleQuery(value);

    console.log(value);
  }

  const checkboxHandler = event => {
    const { checked } = event.target;
    props.handleCheckbox(checked);

    console.log(checked);
  }

  return (
    <div className="search-container">
    <p>Search</p>
      <form action="#">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          className="search"
          id="search"
          onChange={changeProductListingHandler}
          value={props.query}
        />
        <input
          type="checkbox"
          name="stocked"
          id="stocked"
          onChange={checkboxHandler}
          checked={props.stocked}
          />
        <label htmlFor="checkbox" className="checkbox"> Only show products in stock</label>
      </form>
    </div>
  )
}

export default SearchBar;
