import { useState } from "react";
import jsonData from "../data.json"

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  
  const [products, setProducts] = useState(jsonData);

  const [searchValue, setSearchValue] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      <h1>Iron Store</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}
                inStock={inStock} setInStock={setInStock}/>
                
      <ProductTable products={products} searchValue={searchValue}
                   inStock={inStock}/>
    </div>
  );
}

export default ProductsPage;