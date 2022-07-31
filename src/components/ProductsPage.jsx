import { useState } from "react";
import jsonData from './../data.json'
import SearhBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData)
  return (
    <div>
      <SearhBar />
      <h1>IronStore</h1>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;