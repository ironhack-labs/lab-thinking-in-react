import React, { useState } from 'react';
import './ProductsPage.css'
import jsonData from '../data.json'
import SearchBar from './SearchBar';


const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
 return (
   <div>
     <h1>IRONSTORE</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
  
}

export default ProductsPage