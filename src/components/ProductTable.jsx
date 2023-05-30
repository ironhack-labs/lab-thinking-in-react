import { useState } from 'react';
import jsonData from '../data.json';

function ProductTable () {
  const [products, setProducts] = useState(jsonData);
  
  return(
    <div>
    {products.map((products) => {
    return (
    <h1>{products.category}</h1>
    );
    })}
    </div>    
)
}
export default ProductTable           