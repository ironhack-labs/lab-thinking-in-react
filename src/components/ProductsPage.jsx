import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
    const [products] = useState(jsonData);
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProductTable products={products} searchTerm={searchTerm} />
      </div>
    );
  }
  
  export default ProductsPage;