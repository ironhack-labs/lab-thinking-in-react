import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import Search from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>

        <Search />
        
        {products.map(element => {
             return (
            <ProductTable dataImport = {element} />
        )})};
      </div> 
  )   
}

export default ProductsPage;