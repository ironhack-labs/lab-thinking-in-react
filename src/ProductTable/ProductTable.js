import React from 'react';
import './ProductTable.css';

import ProductRow from '../ProductRow/ProductRow';

const renderRows = (state, search) => {
  state.sort((productA, productB) => productA.category > productB.category);
  const tableRows = state.map((product) => {
    const regex = new RegExp(search.searchWord, 'gi');
    if (product.name.match(regex)) {
      if (
        !search.searchOnlyStocked ||
        (search.searchOnlyStocked && product.stocked)
      ) {
        return (
          <ProductRow
            category={product.category}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        );
      } else return '';
    } else return '';
  });
  let category = '';
  tableRows.forEach((product, index) => {
    if (product) {
      if (product.props.category !== category) {
        category = product.props.category;
        const newRow = (
          <div key={index} className="category-row">
            {category}
          </div>
        );
        tableRows.splice(index, 0, newRow);
      }
    }
  });
  return tableRows;
};

const ProductTable = ({ state, search }) => {
  return (
    <div className="product-table-container">
      <div className="table-header">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <div className="table-rows">{renderRows(state, search)}</div>
    </div>
  );
};

export default ProductTable;
