import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';
import { useState } from 'react';
import jsonData from './../../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div className='container'>
      <h1 className='text-center mt-3'>IronStore</h1>
      <SearchBar />
      <ProductTable products={jsonData}/>
    </div>
  );
}

export default ProductsPage;
