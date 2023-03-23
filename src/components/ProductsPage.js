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
    <div className="mx-auto px-4 py-8 max-w-screen-lg flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-900 mt-10 mb-3">IronStore</h1>
      <SearchBar
        handleSearchProducts={handleSearchProducts}
        handleInStockProducts={handleInStockProducts}
      />
      
      <div className="w-full flex justify-center">
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;