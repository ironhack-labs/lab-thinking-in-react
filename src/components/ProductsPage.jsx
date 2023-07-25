import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage (props) {
  const [products, setProducts] = useState(jsonData);
  console.log("productsTable :", ProductsTable)
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar/>
        <ProductsTable products={products}/>
      </div>    
  )
}

export default ProductsPage;