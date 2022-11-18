
import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>

        <SearchBar />
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage