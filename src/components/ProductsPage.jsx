import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage ({search, setSearch}) {
  
  const [products, setProducts] = useState(jsonData);
  return(

    <div>
          <SearchBar search={search} setSearch={setSearch}  />
          <ProductTable search={search} setSearch={setSearch} products={products}/>
      
     
     
    
    
    
   
    
    </div>    
)
}
export default ProductsPage;