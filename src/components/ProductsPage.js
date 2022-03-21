import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import productsJSON from './../data.json';
import { useState } from 'react';

function ProductsPage() {
    const [products, setProducts] = useState(productsJSON);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable allProducts={products}/>
    </div>
  );
}

export default ProductsPage;