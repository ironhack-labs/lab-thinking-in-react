import React from 'react';
import RowItem from '../RowItem/RowItem';
import './List.css';
function List(props) {
  const items = props.items;

  return (
    <div>
      <RowItem style={{ color: props.colorName }} items={items}></RowItem>
    </div>
  );
}

export default List;
