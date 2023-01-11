import { useState } from 'react';
import jsonData from './../data.json';
import ProductRow from './ProductRow'
//import './ProductTable.css';

function ProductTable (props) {
  const [product, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h3>Our products</h3>
        <br/>
        <ProductRow/> 
      </div>    
  )
}

export default ProductTable;