import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export const ProductsPage = (props) => {
  return (
    <div>
      <h1>Ironstore</h1>
      <div>
        <h4>Search</h4>
        <SearchBar filterItems={props.filterItems} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '90%',
          marginTop: '30px',
        }}
      >
        <ProductTable props={props.props} />
      </div>
    </div>
  );
};
