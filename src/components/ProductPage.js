import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from "./ProductRow";

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>         
        <SearchBar/> 
        <ProductTable products={products} />
      </div>
  )
}
export default ProductsPage;