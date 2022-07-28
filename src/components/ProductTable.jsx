import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
    const {products} = props;
  return (
        <>
        <td><strong>Name</strong></td>
        <td><strong>Price</strong></td>
        {products.map(elem => {
        return (
          <ProductRow key={elem.id} products={elem}/>
        )
      })}
      </>
  )
}
