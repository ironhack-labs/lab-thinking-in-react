import React from 'react';

const SearchBar = props => {
  let changeHandler = event => {
    const { value } = event.target;
    props.changeQuery(value);
  };

  let checkHandler = event => {
    const { checked } = event.target;
    props.changeStock(checked);
  };

  return (
    <div className="Searchbar">
      <p>Search</p>
      <form>
        <input
          type="text"
          name="query"
          id="query"
          onChange={changeHandler}
          value={props.query}
        ></input>
        <input
          type="checkbox"
          name="stock"
          id="stock"
          onChange={checkHandler}
          checked={props.stock}
          />
      </form>
    </div>
  );
};

export default SearchBar;
