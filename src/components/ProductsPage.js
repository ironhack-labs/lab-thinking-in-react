import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h2>IronStore</h2>
        <SearchBar/>
        <ProductTable/>

      </div>    
  )
}

export default ProductsPage;