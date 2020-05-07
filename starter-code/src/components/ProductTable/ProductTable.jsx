import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default function ProductTable(props) {
  const filtered = props.products.filter((product) => {
    {
      console.log(product);
      return product.name.toLowerCase().includes(props.search.toLowerCase()) &&
        props.onlyShowProductsInStock
        ? product.stocked
        : true;
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
        {filtered.map((product) => {
          return <ProductRow product={product} key={product.name} />;
        })}
      </tbody>
    </table>
  );
}
