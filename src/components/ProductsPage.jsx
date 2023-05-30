import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>{products}</h1>
      </div>    
  )
}
export default ProductsPage;