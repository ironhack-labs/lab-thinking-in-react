import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

function ProductsPage() { 
  const [products] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [showInStock, setShowInStock] = useState(false); 

  const productFilter = products.filter((product) => {
    const searchFilter = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStockFilter = showInStock ? product.inStock : true;
    return searchFilter && matchesStockFilter
  })
    
  return (
    <div>
      <h1>IronStore</h1>
        <SearchBar 
            searchTerm={searchTerm}
            onSearch ={setSearchTerm}
            showInStock={showInStock}
            onStock={setShowInStock}
        />
        <ProductTable products = {productFilter}/>
    </div>
  );
}

export default ProductsPage;
