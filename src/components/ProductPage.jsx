import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={products} setProducts={setProducts}/>
      </div>    
  )
}

export default ProductsPage;