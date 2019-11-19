import React from 'react';
import ItemList from './ItemList';

const ItemTable = ({ items, onlyInStock }) => (
  <div>
    <table style={{ width: 800 }}>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {items.map(eachItem => (
        <ItemList
          onlyInStock={onlyInStock}
          key={eachItem.name}
          itemName={eachItem.name}
          itemPrice={eachItem.price}
          stocked={eachItem.stocked}
          catagory={eachItem.catagory}
        />
      ))}
    </table>
  </div>
);
export default ItemTable;
