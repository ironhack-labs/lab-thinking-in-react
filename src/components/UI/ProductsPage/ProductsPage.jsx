import { useState } from "react";
import './ProductsPage.css';
import jsonData from '../../../data.json';
import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";
import { isArray } from "../../../utils";

function ProductsPage() {  

  const [searchTerm, setSearchTerm] = useState('');
  const [checkProducts, setCheckProducts] = useState(false);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleCheck = (event) => {
    setCheckProducts(event.target.checked);
  }

  const products = jsonData
  .filter(data => data.name.toLowerCase().includes(searchTerm))
  .filter(data => checkProducts ? data.inStock : true);

  return (
    <>
      <h2 className="m-4">IronStore</h2>
      <SearchBar onSearchTerm={handleSearchTerm} onCheck={handleCheck}/>
      {isArray(products) && <ProductTable searchTerm={products}/>}
    </>
  );
}

export default ProductsPage;