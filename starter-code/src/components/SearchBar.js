import React from 'react';

const SearchBar = props => {
  console.log(props);

  const handleChange = event => {
    const { value } = event.target;
    // here we need to pass the `value` up to the parent component
    console.log(1);
    props.setQuery(value);
  };

  const handleBoxCheck = event => {
    const { checked } = event.target;
    // here we need to pass the `value` up to the parent component
    console.log(1);
    props.setQueries(checked);
  };

  console.log(4) 
  return (

    <div>
      <h3>Search</h3>
      <input
        type="text"
        name="query"
        value={props.handleQuery}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={props.handleQueries}
        onChange={handleBoxCheck}
      />
    </div>
  );
};

export default SearchBar;
