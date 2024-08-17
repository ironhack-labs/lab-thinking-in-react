import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import { useState } from "react";
import jsonData from "./../data.json";

function ProductsPage() {
  const [productsTextFiltered, setProductsTextFiltered] = useState(jsonData);
  const [products, setProducts] = useState(jsonData);

  const filterProductsSearch = (inputText) => {
    console.log(inputText);
    if (!inputText) {
      setProductsTextFiltered(jsonData);
      setProducts(jsonData);
    } else {
      const textFilteredProducts = jsonData.filter((product) =>
        product.name.toLowerCase().startsWith(inputText.toLowerCase())
      );
      setProductsTextFiltered(textFilteredProducts);
      setProducts(textFilteredProducts);
    }
  };

  const filterProductsStocked = (onlyStocked) => {
    console.log(onlyStocked);
    if (onlyStocked) {
      setProducts(productsTextFiltered.filter((product) => product.inStock));
    } else {
      setProducts(productsTextFiltered);
    }
  };

  return (
    <div className="ProductPage">
      <h1>IronStore</h1>
      <SearchBar
        filterProductsSearch={filterProductsSearch}
        filterProductsStocked={filterProductsStocked}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
