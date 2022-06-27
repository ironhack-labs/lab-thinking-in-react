import React from 'react';
import { useEffect, useState } from 'react';

import ProductRow from './ProductRow';

const ProductTable = ({ products, setProducts, search, stock }) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  console.log(stock);

  useEffect(() => {
    if (stock) {
      const newProd = products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(search.toLowerCase() && product.inStock);
      });
      console.log(newProd);
      setProductsToDisplay(newProd);
    } else {
      setProductsToDisplay(
        products.filter((product) => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [stock, search]);

  //   productsToDisplay.sort(
  //     (a, b) => a.category.toLowerCase() < b.category.toLowerCase()
  //   );

  return (
    <section className="productTable">
      <div className="columns">
        <span>Name</span>
        <span>Price</span>
      </div>
      {productsToDisplay.map((product) => {
        return (
          <ProductRow
            key={product.name}
            category={product.category}
            price={product.price}
            inStock={product.inStock}
            name={product.name}
          />
        );
      })}
    </section>
  );
};

export default ProductTable;
