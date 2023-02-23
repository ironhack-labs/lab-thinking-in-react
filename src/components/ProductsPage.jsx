import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <div className="products">
          {products.map(product => (
            <ProductRow key={product.id} product={product}  />
          ))}
        </div>
      </div>    
  )
}

export default ProductsPage;