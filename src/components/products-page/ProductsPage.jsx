import { useState } from "react";
import jsonData from "../../data.json";
import SearchBar from "./search-bar/SearchBar";
import ProductTable from "./product-table/ProductTable";
import './ProductsPage.css'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  let filteredProducts = jsonData

  const handleSearch = (search) => {
    filteredProducts = jsonData.filter((product) => product.name.toLowerCase().includes(search.name.toLowerCase().trim()))

    if (search.checked) {
      filteredProducts = filteredProducts.filter((product) => product.inStock);
    }

    setProducts(filteredProducts);
  }





  return (
    <>
    <div className="ProductsPage">
      <SearchBar onSearch={handleSearch}></SearchBar>
      <ProductTable items={products}></ProductTable>
    </div>
    
    </>
  );
}

export default ProductsPage