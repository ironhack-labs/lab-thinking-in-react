import SearchBar from "../search-bar/SearchBar";
import ProductTable from "../product-table/ProductTable";

import { useState } from 'react';

import jsonData from '../../data.json';

function ProductPage(){
  const [stringSearch, setStringSearch] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSearch = (event) => {
    setStringSearch(event.target.value.toLowerCase())
  }

  const handleCheck = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <div className="product-page container d-flex flex-column justify-content-center text-center mt-4">
      <h2>IronStore</h2>
      <SearchBar search={handleSearch} checked={handleCheck}/>
      <ProductTable randomData={
        jsonData
          .filter(product => checked ? product.inStock : true)
          .filter(product => stringSearch !== '' ? product.name.toLowerCase().includes(stringSearch.toLowerCase()) : true)}/>
    </div>
  );
}

export default ProductPage;