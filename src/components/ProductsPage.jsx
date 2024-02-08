// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  
  const searchFilterFn = (e) => {
    const userSearchInput = e.target.value;
    const filteredList = jsonData.filter((product) => {
        return product.name.includes(userSearchInput)
    })
    setProducts(filteredList);
  }

  const inStockFilterFn = (e) => {
    const checkboxTicked = e.target.checked;
    if (checkboxTicked) {
        const filteredList = products.filter((product) => {
            return (product.inStock)
        })
        setProducts(filteredList);
    } else {
        setProducts(jsonData);
    }
  }

  return (
    <section>
        <h1>IronStore</h1>
        <SearchBar searchFilter={searchFilterFn} inStockFilter={inStockFilterFn} />
        <ProductTable productList={products} />
    </section>
  );
}

export default ProductsPage;