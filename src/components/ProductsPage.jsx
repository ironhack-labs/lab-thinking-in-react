import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import jsonData from "../data.json";


const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(jsonData);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const handleInStockChange = (inStockOnly) => {
    setShowInStockOnly(inStockOnly);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStock = !showInStockOnly || product.inStock;
    return matchesSearchTerm && matchesStock;
  });



return (
    <div className='products-page' > 
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} onInStockChange={handleInStockChange} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;