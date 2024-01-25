
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div >
        <h1 style={{fontSize:'30px', color: '#0A7EA4'}}>IronStore</h1>
        <SearchBar products= {products}/>
        <ProductTable products= {products}/>
      </div>    
  )
}

export default ProductsPage;