import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
//   console.log('props from Product table', props.inStock);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
          <ProductRow products={props.products} query={props.query} inStock={props.inStock}/>
        </tbody>
      </table>
    </div>
  );
}
