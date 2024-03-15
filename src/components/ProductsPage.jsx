// src/components/ProductsPage.jsx

import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import jsonData from "../data.json";

export const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const searchData = (input, isAvailable) => {
    setFilteredProducts(
      products
        .filter((product) => {
          if (isAvailable === false) {
            return true;
          }

          return product.inStock === true;
        })
        .filter((product) => {
          if (input === "") {
            return true;
          }
          if (
            product.category.includes(input) ||
            product.name.includes(input) ||
            product.price.includes(input)
          ) {
            return true;
          } else {
            return false;
          }
        })
    );
  };
  return (
    <div className="product-page">
      <SearchBar searchData={searchData} />
      <ProductTable filteredProducts={filteredProducts} />
    </div>
  );
};


