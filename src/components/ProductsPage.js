import productsData from "../data.json";
import { useState } from "react";
import SearchBar from './SearchBar';

function ProductsPage() {
  //const [products, setProducts] = useState(productsData);

  return(
    <div>
      <h1>IronStore</h1>
      <SearchBar data={productsData} />
    </div>
  )
}

export default ProductsPage;
