import React from 'react';
import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json';

function ProductsPage() {

  const [products, setProducts] = useState(jsonData);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (value) => {
    setInputText(value)
  } 

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar onInputChange={handleInputChange}/>
        <ProductTable  products={products} inputText={inputText}/>
      </div>   
    )
  }

export default ProductsPage