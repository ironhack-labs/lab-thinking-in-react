import React, { useState } from 'react';

function SearchBar(props) {
  const handleSerachChange = (e) => {
    let query = e.currentTarget.value;
    props.getInfo(query.toLowerCase());
  };

  return (
    <div>
      <label>
        Serach:
        <input
          onChange={(e) => handleSerachChange(e)}
          name="name"
          type="text"
        />
      </label>
    </div>
  );
}

export default SearchBar;
