import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {
  const products = jsonData;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchQuery={searchQuery}
        onSearchInputChange={handleSearchInputChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
