import React from 'react';

export default function SearchBar(props) {
  function handleChange(event) {
    // console.log(event.target.value, 'VALUE');
    let newValue = event.target.value;
    props.handleQuery(newValue);
  }

  // create handleCheckboxChange that is gonna call the function that you are sending as a props from the parent.
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
        // add propriety checked and assign as a value the value that you are sending as a propos from the parent
        value={props.checkbox}
        // add onChange that is gonna call a handleCheckboxChange
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">Only show products on stock</label>
    </div>
  );
}
