import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  
  return (
    <div>
      <p class="fs-1 mt-3">IronStore</p>
      <SearchBar
      products = {products} />
      <ProductTable 
       products = {products} />
    </div>
    
  )
}

export default ProductsPage;
