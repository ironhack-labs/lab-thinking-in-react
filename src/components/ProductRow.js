import React from 'react';

export default function (props) {
  console.log('here they are NOW: ', props.products);
  for (let i = 0; i < props.products.length; i++) {
    console.log(i);
  }
  const mappedData = props.products.map((product) => (
    <tr key={product.id} className="ProductRows">
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  ));
  return <>{mappedData}</>;
}
