import React from 'react';
import jsonData from '../data.json';
import Searchbar from './SearchBar';
import ProductTable from './ProductTable';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [checkBox, setCheckBox] = React.useState(false)
  const handleSearchChange = (value) => setSearchTerm(value);
const handleCheckBoxChange = (value) => setCheckBox(value)
  return (
    <div className="ProductPage">
      <h1>IronStore</h1>
      <Searchbar searchChange={handleSearchChange} checkBox={handleCheckBoxChange}/>
      <ProductTable checked={checkBox} searchTerm={searchTerm} itemList={jsonData} />
    </div>
  );
};

export default ProductPage;
