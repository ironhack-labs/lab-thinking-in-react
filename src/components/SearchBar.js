import React from 'react';

const SearchBar = (props) => {
  const handleQueryChange = (event) => {
    props.setQuery(event.target.value); // with the value from the input field
  };

  const handleCheckChange = (event) => {
    props.setAvailability(!props.availability);
  };

//   console.log(props.availability);

  return (
    <div>
      <p>
        <input
          type="text"
          name="query"
          value={props.query}
          onChange={handleQueryChange}
        />
      </p>
      <p>
        <label>
          Only products in stock
          <input
            name="student"
            type="checkbox"
            checked={props.availability}
            onChange={handleCheckChange}
          />
        </label>
      </p>
    </div>
  );
};

export default SearchBar;
