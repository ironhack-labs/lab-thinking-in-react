import { useState } from 'react';
import productInfo from '../data.json';

function ProductsPage({  }) {
const [products, setProducts] = useState(productInfo);
    return (
     <h1>IronStore</h1>
    );
  }
  
  export default ProductsPage;