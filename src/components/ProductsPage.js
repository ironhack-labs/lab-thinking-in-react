import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleSearchProducts = (searchValue) => {
    if (searchValue) {
      setProducts((prev) =>
        prev.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setProducts(jsonData);
    }
  };

  const handleInStockProducts = (value) => {
    if (value) {
      setProducts((prev) =>
        prev.filter((product) => product.inStock === value)
      );
    } else {
      setProducts(jsonData)
    }
  };
  
  return (
    <div>
      <SearchBar
        handleSearchProducts={handleSearchProducts}
        handleInStockProducts={handleInStockProducts}
      />
      <h1>IronStore</h1>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;