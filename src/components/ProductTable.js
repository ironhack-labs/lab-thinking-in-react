import { useState } from 'react';
import ProductRow from './ProductRow';
import jsonDataJSON from './../data.json';

function ProductTable({ search, setSearch }) {
  const [products, getProducts] = useState(jsonDataJSON);

  return (
    <table>
      <thead>
        <th>Category</th>
        <th>Price</th>
        <th>Product</th>
      </thead>
      <tbody>
        {products
          .filter((oneFilteredProduct) => {
            if (
              oneFilteredProduct.name
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return true;
            }
          })
          .map((item) => {
            return (
              <ProductRow
                key={item.id}
                category={item.category}
                name={item.name}
                price={item.price}
                inStock={item.inStock}
              />
            );
          })}
      </tbody>
    </table>
  );
}

export default ProductTable;
