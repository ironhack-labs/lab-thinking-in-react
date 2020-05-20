import React from 'react';
import Item from '../../atoms/Item';

const ProductTable = ({ data }) => {
  return (
    <div className="productTable--container">
      {data.map((item, index) => (
        <Item
          name={item.name}
          price={item.price}
          key={`${index + 1}-product`}
        />
      ))}
    </div>
  );
};

export default ProductTable;
