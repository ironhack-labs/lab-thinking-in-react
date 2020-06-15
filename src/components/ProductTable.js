import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const products = props.products;

  return (
    <div className="products-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {products.map((eachProduct) => {
          return (
            <tbody>
              <ProductRow key={eachProduct.name} eachProduct={eachProduct} />
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ProductTable;

