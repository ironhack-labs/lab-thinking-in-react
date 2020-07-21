import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const filterCheckbox = props.masterState.products.filter((item) => {
    if (props.checkbox) {
      return item.stocked;
    } else {
      return item;
    }
  });

  const filteredProducts = filterCheckbox.filter((item) => {
    const listItem = item.name.toLowerCase();
    const filter = props.filter.toLowerCase();
    return listItem.includes(filter);
  });

  const productList = filteredProducts.map((item) => (
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
