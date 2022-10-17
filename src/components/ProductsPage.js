// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState('');

    const handleInputChange = (e) => {
        setProducts(e.target.value)
    }

    const result = jsonData.filter(thing => 
        thing.name.slice(0, products.length) == 
        products.slice(0, products.length) 
        )
    

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar 
            handleInputChange={handleInputChange}
            product={products}
        />
        <ProductTable products={result}/>
      </div>    
  )
}

export default ProductsPage;