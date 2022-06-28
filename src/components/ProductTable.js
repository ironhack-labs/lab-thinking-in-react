import { useState } from 'react';
import jsonData from '../data.json';

function ProductTable () {
  const [product, setproduct] = useState(jsonData);
  
  return(
      <div>
        <h1>Product Table</h1>
      </div>    
  )
}

export default ProductTable;