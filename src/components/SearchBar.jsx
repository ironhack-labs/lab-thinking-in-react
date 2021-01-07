import React from 'react';

const SearchBar = (props) => {
  function checked(event) {
    props.showStock(event.currentTarget.checked);
  }

  function changeHandler(event) {
    const value = event.target.value;
    props.search(value);
  }

  return (
    <div className="SearchBar">
      <form>
        <div>
          <label> Search </label>
        </div>
        <div>
          <input type="search" name="search" onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="checkbox">Only show products on stock</label>
          <input type="checkbox" onChange={checked}></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
