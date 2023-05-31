import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';

function ProductsPage ({search, setSearch, key}) {
  
  const [products, setProducts] = useState(jsonData);
  return(

    <div>
          <SearchBar search={search} setSearch={setSearch} products={products} />

      <h1>Products Page </h1>
      {products
      .filter((oneFilteredStudent)=>{
        if(oneFilteredStudent.name.includes(search))
        
        return oneFilteredStudent.name
      })
      .map((products)=> {
        return  <h1>{products.name}</h1>
        
      })
     
    }
    
    
   
    
    </div>    
)
}
export default ProductsPage;