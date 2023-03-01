import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(jsonData);
  const [allProducts, setAllProducts] = useState(jsonData);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    if (!searchQuery) {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery)
        )
      );
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <div className="products">
        <SearchBar handleSearch={handleSearch} />
        <ProductTable products={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductsPage;