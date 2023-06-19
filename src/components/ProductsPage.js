import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
const [filteredProduct, setFilteredProduct] = useState([])
  function filterFunction (searchValue){
    
    const filter = 

products.filter((product) =>
product.name.toLowerCase().includes(searchValue.toLowerCase())
);
setFilteredProduct(filter)
}
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar products={products} filterFunction={filterFunction}/>
        <ProductTable products={filteredProduct} />
      </div>    
  )
}

export default ProductsPage;