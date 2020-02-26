import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
    return (
      <div className="producttable">
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            <ProductRow
              inStock={props.inStock}
              search={props.search}
              products={props.products}
            />
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ProductTable;