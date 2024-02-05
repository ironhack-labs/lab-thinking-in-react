import { useState } from "react"
import jsonData from "../data.json"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"


function ProductsPage() {
  const [productsData, setProductsData] = useState(jsonData);
  const [searchItem, setSearchItem] = useState('')

  return (
    <div>
      <SearchBar setSearchItem={setSearchItem} setProductsData={setProductsData}/>
      <ProductTable productsData={productsData} searchItem={searchItem}/>

    </div>
  );
}

export default ProductsPage