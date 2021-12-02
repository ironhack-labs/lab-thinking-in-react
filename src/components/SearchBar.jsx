import React from 'react';

export default function SearchBar(props) {
  return (
    <div>
      <div>
        <input
          value={props.filter}
          onChange={props.searchHandlerProp}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="filter-row">
        <input
          checked={props.checked}
          onChange={props.checkedHandlerProp}
          type="checkbox"
        />
        <span>Products in stock </span>
      </div>
    </div>
  );
}
