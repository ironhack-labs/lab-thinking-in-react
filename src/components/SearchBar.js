import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.setQuery(event.target.value); // with the value from the input field
  };

  return (
    <div>
      <input
        type="text"
        name="query"
        value={props.query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
