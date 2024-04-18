import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false); 

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const handleInStockChange = (checked) => {
    setInStockOnly(checked);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable products={jsonData} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  );
}

export default ProductsPage;