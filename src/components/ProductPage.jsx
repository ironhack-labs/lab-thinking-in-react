import React from 'react';
import jsonData from '../data.json';
import Searchbar from './SearchBar';
import ProductTable from './ProductTable';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (value) => setSearchTerm(value);

  return (
    <div className="ProductPage">
      <h1>IronStore</h1>
      <Searchbar onChange={handleSearchChange} />
      <ProductTable searchTerm={searchTerm} itemList={jsonData} />
    </div>
  );
};

export default ProductPage;
