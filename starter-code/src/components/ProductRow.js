import React from 'react';

const ProductRow = (props) => {
  const filteredProducts = props.products.filter((product) => {
    return props.filterStock
      ? product.name.toLowerCase().includes(props.query.toLowerCase()) &&
          product.stocked
      : product.name.toLowerCase().includes(props.query.toLowerCase());
  });
  return (
    <tbody>
      {filteredProducts.map((product) => {
        return (
          <tr
            className="tr"
            style={product.stocked ? { color: 'black' } : { color: 'red' }}
            key={product.name}
          >
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProductRow;
