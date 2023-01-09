import { useState } from 'react';
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar/>
        <ProductsTable/>
      </div>    
  )
}

export default ProductsPage;