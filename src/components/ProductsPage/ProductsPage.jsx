import React from 'react';
import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json';


function ProductsPage() {

  const [products, setProducts] = useState(jsonData);

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </div>   
    )
  }

export default ProductsPage