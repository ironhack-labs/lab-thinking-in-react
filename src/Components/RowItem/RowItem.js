import React from 'react';

function RowItem(props) {
  const items = props.items;
  return (
    <div>
      <div className="HeaderList">
        <p> Name</p>
        <p> Price</p>
      </div>
      {items.map((item) => {
        return (
          <div
            className="RowList"
            style={{ color: item.stocked ? 'black' : 'red' }}
          >
            <p> {item.name}</p>
            <p> {item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RowItem;
