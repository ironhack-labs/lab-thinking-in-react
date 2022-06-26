import React from 'react';
import ProductRow from './ProductRow';


 const ProductTable = ({ products, setProducts, search, stock }) => {
    let productsToDisplay = [];
    console.log(stock);
    if (stock) {
      productsToDisplay = products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(search.toLowerCase() && product.inStock);
      });
    } else {
      productsToDisplay = products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  
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
              name={product.name} />
          )
        })}
      </section>
    );
  };

 export default ProductTable