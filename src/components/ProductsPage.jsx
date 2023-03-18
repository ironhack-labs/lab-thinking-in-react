import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from '../data.json';
import './productsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  const searchProducts = (value) => {
    if (value)
      setProducts((prev) =>
        prev.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    else setProducts(jsonData);
  };

  return (
    <div>
      <SearchBar searchProducts={searchProducts} />

      <ProductTable productsData={products} />
    </div>
  );
};

export default ProductsPage;
