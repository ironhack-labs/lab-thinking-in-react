import React from 'react';
import 'bulma/css/bulma.css';

function SearchBar(props) {
  let inputChangeHandler = (event) => {
    let inputValue = event.target.value;
    props.onSearchCallback(inputValue);
  };

  let checkedChangeHandler = (event) => {
    let checkedValue = event.target.checked;
    props.checkedCallback(checkedValue);
  };

  return (
    <div className="column">
      <div className="field">
        <div className="columns">
          <input
            className="input"
            name="search"
            type="text"
            onChange={inputChangeHandler}
            value={props.searchTerm}
            placeholder="Search for product"
          ></input>
        </div>

        <div className="columns is-mobile">
          <div className="column is-narrow">
            <input
              type="checkbox"
              checked={props.checked}
              onChange={checkedChangeHandler}
            ></input>
          </div>
          <div className="column">
            <label className="checkbox">Only show products in stock</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
