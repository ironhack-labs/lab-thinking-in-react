import React from 'react';

{
  /* <SearchBar search = {props.search} updateSearchText={props.updateSearchText}/> */
}

const SearchBar = props => {
  return (
    <div>
      <div className="searchbar">
        <p>Search</p>
        <input
          className="searchinputfield"
          type="text"
          value={props.search}
          onChange={e => {
            props.updateSearchText(e.target.value);
          }}
        />
        <div className="checkboxdiv">
          <input
            type="checkbox"
            name="checkbox"
            checked={props.inStock}
            onChange={props.handleCheck}
          />
          <label htmlFor="checkbox">Only show products on stock</label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;