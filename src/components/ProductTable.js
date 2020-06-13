import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const products = props.products;
  console.log(products)


  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((eachProduct) => {
            return <ProductRow key={eachProduct.name} product={eachProduct} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
