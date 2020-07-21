import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const filteredProduct = props.masterState.products.filter((item) => {
    const listItem = item.name.toLowerCase();
    const filter = props.filter.toLowerCase();
    return listItem.includes(filter);
  });

  const productList = filteredProduct.map((item) => (
    <ProductRow key={item.name} product={item} />
  ));

  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
