import { useState } from "react";
import jsonData from "./../../src/data.json"
import ProductTable from "./ProductTable.jsx"
import SearchBar from './SearchBar.jsx';





function ProductsPage() {
   const [products, setProducts] = useState(jsonData);
   const [searchTerm, setSearchTerm] = useState(""); 

   const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <ProductTable products={filteredProducts} />
    </div>
  );

 }
export default ProductsPage;

