import React from 'react';
import ProductRow from '../ProductRow';

const ProductTable = (props) => {
  const { products } = props;
  return (
    <table className='product-table'>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, price, inStock }) => {
          return (
            <ProductRow
              key={id}
              name={name}
              price={price}
              inStock={inStock}
            />
          );
        })}
      </tbody>
    </table>
  )
}

export default ProductTable;