import SearchBar from './SearchBar';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  function handleFilterProducts(keyword) {
    const filteredProducts = [...products].filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setFilteredProducts(filteredProducts);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleFilterProducts={handleFilterProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
