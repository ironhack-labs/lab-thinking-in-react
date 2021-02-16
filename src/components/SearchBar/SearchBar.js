import React, { useState } from 'react';

const SearchBar = ({filter}) => {
    const [inputValue, setValue] = useState('');
    
  const handleChange = (event) => {
    const { value } = event.target;
      setValue(value);
      filter(inputValue);
  };

  return (
    <section>
      <h3>Search</h3>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search ..."
        value={inputValue}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBar;
