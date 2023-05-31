import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';

function ProductsPage ({search, setSearch}) {
  
  const [products, setProducts] = useState(jsonData);
  return(

    <div>
          <SearchBar search={search} setSearch={setSearch}  />
          <ProductTable search={search} setSearch={setSearch}/>
      <h1>Products Page </h1>
     
     
    
    
    
   
    
    </div>    
)
}
export default ProductsPage;