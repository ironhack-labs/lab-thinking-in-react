import React from 'react';

export default function SearchBar(props) {

  return (
    <div>

      <input type="text" value={props.value}
        onChange={e => props.onSearch(e.target.value)} />
      <label htmlFor="stock">only show products in stock</label>
      <input type="checkbox" name='stock' onChange={e => props.onTick(e.target.checked)} />

    </div>
  )

}