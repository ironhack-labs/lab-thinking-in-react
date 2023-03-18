import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from '../data.json';
import './productsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar />

      <ProductTable />
    </div>
  );
};

export default ProductsPage;
