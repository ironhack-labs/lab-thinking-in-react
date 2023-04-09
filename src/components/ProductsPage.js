import { useState } from "react";
import jsonData from "./../data.json"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";



function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [searchResults, setSearchResults] = useState("");

    const handleSearch = (e) => {
        setSearchResults(e.target.value);
      };
  
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar  search={searchResults} onSearch={handleSearch} />
  
        <div className="table-container">
          <ProductTable products={searchResults} />
        </div>
      </div>
    );
  }
  
  export default ProductsPage;