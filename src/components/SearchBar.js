import React from 'react';

export default function SearchBar(props) {
  const searchHandler = (event) => {
    props.setQueryProp(event.target.value);
  };
  const checkHandler = (event) => {
    props.setInStockProp(event.target.checked);
    console.log('checked');
  };

  return (
    <div>
      <input type="search" onChange={searchHandler} />
      <input type="checkBox" onChange={checkHandler} />
    </div>
  );
}
