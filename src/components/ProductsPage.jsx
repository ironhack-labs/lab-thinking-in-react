import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import Search from "./SearchBar";


function ProductsPage() {
  const [products] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
    <Search items={jsonData}/>
    <hr/>
    <ProductTable products={products}></ProductTable>
    </div>
  );
}

export default ProductsPage