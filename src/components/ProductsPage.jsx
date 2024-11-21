import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false); 


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleStockChange = (event) => {
    setInStockOnly(event.target.checked);
  };


  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStockFilter = inStockOnly ? product.inStock : true; 
    return matchesSearchTerm && matchesStockFilter;
  });

  return (
    <div className="text-center m-4">
      <h1>IronStore</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} onStockChange={handleStockChange} inStockOnly={inStockOnly} />

      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
