import React from 'react';

import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const filteredProductList = props.productList.filter((product) => {
    if (props.checkbox) {
      if (
        product.name.toLowerCase().includes(props.query.toLowerCase()) &&
        product.stocked
      ) {
        return product;
      }
    } else if (product.name.toLowerCase().includes(props.query.toLowerCase())) {
      return product;
    }
  });
  return (
    <div>
      <h1>ProductTable</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProductList.map((item) => {
            return (
              <ProductRow
                key={item.name}
                name={item.name}
                price={item.price}
                stocked={item.stocked}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
