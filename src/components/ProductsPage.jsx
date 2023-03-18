import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from '../data.json';
import './productsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  const handleSearchProducts = (value) => {
    if (value)
      setProducts((prev) =>
        prev.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    else setProducts(jsonData);
  };

  const handleIsStockProducts = (value) => {
    if (value)
      setProducts((prev) =>
        prev.filter((product) => product.inStock === value)
      );
    else setProducts(jsonData);
  };

  return (
    <div>
      <SearchBar
        searchProducts={handleSearchProducts}
        isStockProducts={handleIsStockProducts}
      />

      <ProductTable productsData={products} />
    </div>
  );
};

export default ProductsPage;
