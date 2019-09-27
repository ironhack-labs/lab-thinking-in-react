import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  console.log(props)
  return (
    <div>
      <div className="tableHeader">
        <div>Name</div>
        <div>Price</div>
      </div>
      <ProductRow query={props.query} queries={props.queries} products={props.products}/>
    </div>
  );
};

export default ProductTable;
