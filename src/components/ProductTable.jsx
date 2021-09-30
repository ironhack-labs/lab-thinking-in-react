import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div className="product-table-wrapper">
      {props.productArr.map((prod) => (
        <ProductRow product={prod} key={prod.id}></ProductRow>
      ))}
    </div>
  );
};

export default ProductTable;
