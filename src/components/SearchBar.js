import React from 'react';

export default function SearchBar(props) {
  const handleChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    props.setQuery(name,value)
  }
  
return (
    <div>
      <input
        type="text"
        name="query"
        value={props.query}
        onChange={handleChange}
      />
      <label>Only show products on stock
      <input
      name="onStock"
      type="checkbox"
      checked={props.checked}
      onChange={handleChange}/>
      </label>
    </div>
  );
}

