import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div className='products-page'>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </div>    
  );
};

export default ProductsPage;