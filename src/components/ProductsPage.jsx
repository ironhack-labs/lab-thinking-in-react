import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStock = !inStockOnly || product.inStock;
    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        inStockOnly={inStockOnly} 
        onSearch={handleSearch} 
        onInStockChange={handleInStockChange} 
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
