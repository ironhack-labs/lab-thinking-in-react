import React from 'react';

const ProductRow = (props) => {
  const allProducts = props.filtered.map((product) => {
    return (
      <tr key={product.key}>
        <td style={product.stocked ? { color: 'white' } : { color: 'red' }}>
          {product.name}
        </td>
        <td>{product.price}</td>
        {/* <td>{product.stocked.toString()}</td> */}
      </tr>
    );
  });

  return <>{allProducts}</>;
};

export default ProductRow;
