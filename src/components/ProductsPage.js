// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const[search, setSearch] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

 

  const filteredProducts = products.filter((product) =>{
    const nameMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const inStockMatch = !showInStockOnly || product.inStock;
    return nameMatch && inStockMatch;
  }
);

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar search={search} setSearch={setSearch} showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}/>
        <ProductsTable products={filteredProducts}/>

        
      </div>    
  )
}

export default ProductsPage;
