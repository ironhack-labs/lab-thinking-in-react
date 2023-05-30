import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  return(
    <div>
      <h1>Products Page </h1>
      {products.map((product) => {
      return <h1>{product.name}</h1>
     
     }
     )}
     {products.map((product) => {
      return <h1>{product.category}</h1>
     })}
    </div>    
)
}
export default ProductsPage;