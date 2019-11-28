import React from 'react';
import ProductRow from './ProductRow.js';

const ProductTable = props => {
  console.log(props.products);
  return (
    <div>
      <table
        style={{
          marginLeft: '50%',
          transform: 'translate(-50%)'
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products
            .filter(product => {
              // .toLowerCase() makes the search case insensitive
              if (
                product.name.toLowerCase().includes(props.filter.toLowerCase())
              ) {
                return true;
              }
            })
            .filter(product => {
              if (!props.checked) {
                return true;
              } else if (props.checked === product.stocked) {
                return true;
              }
            })
            .map((oneProduct, index) => (
              <ProductRow
                key={index}
                name={oneProduct.name}
                price={oneProduct.price}
      
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
