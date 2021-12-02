import React from 'react';
import RowItem from '../RowItem/RowItem';
import './List.css';
function List(props) {
  const items = props.items;

  return (
    <div>
      <RowItem
        style={items.stocked ? { color: 'black' } : { color: 'red' }}
        items={items}
      ></RowItem>
    </div>
  );
}

export default List;
