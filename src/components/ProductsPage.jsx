import React, { useState } from 'react';
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
      <SearchBar onSearch={handleSearch} />
    </div>
  );
  
}

export default ProductsPage