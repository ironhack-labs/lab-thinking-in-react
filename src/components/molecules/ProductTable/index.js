import React from 'react';
import Item from '../../atoms/Item';

const ProductTable = ({ data }) => {
  return (
    <div className="productTable--container">
      {data.data.map(item => (
        <Item name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default ProductTable;
