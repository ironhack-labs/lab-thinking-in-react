import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  //   console.log(props);
  return (
    <div>
      <ProductRow
        products={props.products}
        query={props.query}
        triggerSetQuery={props.triggerSetQuery}
        clicked={props.clicked}
      ></ProductRow>
    </div>
  );
}
