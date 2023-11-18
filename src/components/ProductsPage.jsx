// src/components/ProductsPage.jsx
import { useState } from "react";
import jsonData from "./../data.json";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [input, setInput] = useState("");
  const [stock, setStock] = useState(false);

  function searchHandle(e) {
    setInput(e.target.value);
  }

  function stockHandle() {
    setStock(!stock);
  }

  function displayProduct() {
    let filteredProducts = products;

    if (stock) {
      filteredProducts = products.filter((product) => product.inStock);
    }

    if (input !== "") {
      let inputLow = input.toLowerCase();

      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(inputLow)
      );
    }
    return filteredProducts;
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchHandle={searchHandle} stockHandle={stockHandle} />
      <ProductTable products={displayProduct()} />
    </div>
  );
}

export default ProductsPage;
