import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  // console.log(props.products)
  return (
    <table className="ProductTable">
      <tbody>
        <tr>
          <td>Product</td>
          <td>Price</td>
        </tr>
        <ProductRow products={props.products} />
      </tbody>
    </table>
  );
}
