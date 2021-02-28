import React from 'react';

export default function ProductRow(props) {
  //console.log(props.products)

  return props.products.map((product) => {
    return (
      <tr key={product.id}>
        <td style={product.stocked ? { color: 'black' } : { color: 'red' }}>
          {product.name}
        </td>
        <td>{product.price} </td>
      </tr>
    );
  });
}
