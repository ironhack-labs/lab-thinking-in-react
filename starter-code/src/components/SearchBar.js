import React from 'react';

const SearchBar = (props) => {
  // console.log(`Props on Searchbar`, props)

  const changeProductListingHandler = event => {
    // Get value from User Input and initialize value constant
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
    <div className="search-bar">
      <h2>Search</h2>
      <form action="#">
        <label htmlFor="search"></label>
        <input
          type="search"
          className="search"
          id="search"
          onChange={changeProductListingHandler}
          value={props.userQuery}
        />
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={checkboxHandler}
          checked={props.stocked}
          />
        <label htmlFor="checkbox">Only show products in stock</label>
      </form>
    </div>
  )
}

export default SearchBar;