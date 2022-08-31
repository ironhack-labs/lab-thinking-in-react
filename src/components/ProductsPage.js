import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable gridData={products}/>
      </div>    
  )
}

export default ProductsPage