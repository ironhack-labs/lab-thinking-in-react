import React from 'react';

export default function SearchBar(props) {
  function handleChange(event) {
    let newValue = event.target.value;
    props.handleQuery(newValue);
  }

  function handleCheckboxChange() {
    props.handleCheckbox();
  }

  return (
    <div>
      <h1>SearchBar</h1>
      <input
        type="text"
        name="query"
        value={props.query}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="checkedbox"
        value={props.checkbox}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">Only show products on stock</label>
    </div>
  );
}