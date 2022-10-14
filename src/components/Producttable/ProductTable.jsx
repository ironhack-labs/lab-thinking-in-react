import React from 'react';
import ProductRow from '../Productrow/ProductRow';

const ProductTable = ({ products, search }) => {
  return (
    <div className="products-table-container">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </tbody>
      </table>
      {products
        .filter((product) => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((newProduct) => {
          return <ProductRow newProduct={newProduct} key={newProduct.id} />;
        })}
    </div>
  );
};

export default ProductTable;
