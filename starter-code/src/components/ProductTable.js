import React from 'react';
import ProductRow from './ProductRow';
const ProductTable = props => {
  const productsToRender = [...props.products.data].filter(
    el =>
      el.name.includes(props.filter.searchText) &&
      (props.filter.onlyStock ? el.stocked : true)
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsToRender.map((item, idx) => (
          <ProductRow
            key={idx}
            name={item.name}
            price={item.price}
            stocked={item.stocked}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
