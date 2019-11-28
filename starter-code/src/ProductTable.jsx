import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  console.log(props);
  const filtered = props.data.filter(product => {
    if (props.showIfIsStocked) {
      if (
        product.name.toLowerCase().includes(props.query.toLowerCase()) &&
        product.stocked
      ) {
        return true;
      }
    } else if (product.name.toLowerCase().includes(props.query.toLowerCase())) {
      return true;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((product, index) => {
          return (
            <ProductRow
              key={index}
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
