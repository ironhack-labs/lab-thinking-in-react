import React from 'react';

export default function SearchBar(props) {
  const searchHandler = (event) => {
    props.setQueryProp(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={searchHandler} />
    </div>
  );
}
