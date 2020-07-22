import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <React.Fragment>
      <table className="ProductTable  flex col">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, i) => (
            <ProductRow
              key={i}
              name={prod.name}
              price={prod.price}
              stocked={prod.stocked}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ProductTable;
