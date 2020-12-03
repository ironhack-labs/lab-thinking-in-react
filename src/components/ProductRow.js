import React from 'react';

export default function ProductRow(props) {
    // console.log('props in prodrow', props);
    // console.log('props.query', props.query);
    // console.log('props.inStock', props.inStock);
    console.log(props.products);

  let filtered = props.products.data.filter((product) => {
     return product.name.toLowerCase().includes(props.query.toLowerCase());
  })

  if (props.inStock) {
      filtered = filtered.filter((product) => {
          return product.stocked
      })
  }

//   console.log('filtered',filtered);

  return (
    <>
      {filtered.map((product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}
