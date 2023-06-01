// src/components/ProductsPage.js

import { useState } from 'react';
import allProducts from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage(props) {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  //   console.log('2222222222', searchTerm);
  //   const search = (event) => {
  //     setSearchTerm(event.target.value);
  //   };
  //   console.log(search);

  return (
    <div className="productsPage">
      <h1>IronStore</h1>
      <SearchBar products={products} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
