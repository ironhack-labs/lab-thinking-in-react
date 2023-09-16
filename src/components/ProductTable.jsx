import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
             <ProductRow product={product}/>
            );
          })}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
