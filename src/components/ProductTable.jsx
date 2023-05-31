import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';
import ProductsPage from './ProductsPage';
import SearchBar from './SearchBar';
function ProductTable ({search}) {
  const [products, setProducts] = useState(jsonData);
  
  return(
    <div>
      <ProductRow search={search} />
      

    </div>    
)
}
export default ProductTable           