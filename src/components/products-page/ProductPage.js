import SearchBar from "../search-bar/SearchBar";
import ProductTable from "../product-table/ProductTable";

import { useState } from 'react';

import jsonData from '../../data.json';

function ProductPage(){
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (event) => {
    const inStockCheck = document.getElementById('checkInput').checked;
    setProducts(
      jsonData
        .filter(product => inStockCheck ? product.inStock : true)
        .filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    )
  }

  const handleCheck = (event) => {
    const searchValue = document.getElementById('searchInput').value;
    setProducts(
      jsonData
        .filter(product => event.target.checked ? product.inStock : true)
        .filter(product => searchValue !== '' ? product.name.toLowerCase().includes(searchValue.toLowerCase()) : true)
    )
  }

  return (
    <div className="product-page container d-flex flex-column justify-content-center text-center mt-4">
      <h2>IronStore</h2>
      <SearchBar search={handleSearch} checked={handleCheck}/>
      <ProductTable randomData={products}/>
    </div>
  );
}

export default ProductPage;