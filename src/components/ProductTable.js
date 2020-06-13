import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div className="products-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {props.products.data.map((eachProduct) => {
          return (
            <tbody>
              <ProductRow eachProduct={eachProduct} />
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ProductTable;

