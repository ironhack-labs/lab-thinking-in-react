import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  let filteredData = props.products.data.filter((product) =>
    product.name.toLowerCase().includes(props.query.toLowerCase())
  );

  if (props.onStock === true) {
    filteredData = filteredData.filter((product) => {
      return product.stocked === true;
    });
  }

  let tabledata = filteredData.map((product, index) => {
    // console.log(product.name, product.price)
    return (
      <ProductRow index={index} name={product.name} price={product.price} />
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{tabledata}</tbody>
      </table>
    </div>
  );
}
