/*
 * Filterable Product Table (Note: Who chose this name?)
 */

import React, { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable(props) {
  const [searchResult, setSearchResult] = useState(props.products);

  const productSearcher = (userInput) => {
    setSearchResult(
      props.products.filter((product) => {
        return product.name.toLowerCase().includes(userInput);
      })
    );
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onUserInput={productSearcher} />
      <ProductTable products={searchResult} />
    </div>
  );
}

export default FilterableProductTable;
