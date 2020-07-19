import React from 'react';

export default function SearchBar(props) {
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    props.setQuery(name, value);
  };

  return (
    <div>
      <p>
        <input
          type="text"
          name="query"
          value={props.state.query}
          onChange={handleChange}
        />
      </p>
      <p>
        <label>Only show products in stock </label>
        <input
          name="onStock"
          type="checkbox"
          checked={props.state.onStock}
          onChange={handleChange}
        />
      </p>
    </div>
  );
}
