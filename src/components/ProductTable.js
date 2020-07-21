import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const productsList = props.products.data
    .filter((product) => {
      if (props.filterCheckbox) {
        return product.stocked === true;
      } else {
        return product.name
          .toLowerCase()
          .includes(props.searchParam.toLowerCase());
      }
    })
    .map((product) => (
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        category={product.category}
        stocked={product.stocked}
      />
    ));

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
