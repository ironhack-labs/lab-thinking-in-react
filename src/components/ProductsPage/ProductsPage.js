import React, { useState } from 'react'
import data from '../../data.json'

import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'


const ProductsPage = () => {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(products);   //ou useState(data)
  const [inStock, setInStock] = useState(true);
  
  
  const filterProductsSearch = (input) => {
    const filtered = products.filter(product => {
      if(inStock){
        return product.name.toLowerCase().includes(input.toLowerCase()) && product.inStock === true;
      }
      return product.name.toLowerCase().includes(input.toLowerCase())
    });
    setFilteredProducts(filtered);
  };


  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar filterProductsSearch={filterProductsSearch} inStock={inStock}/>
        <ProductTable filteredProducts={filteredProducts}/>
    </div>
  )
}

export default ProductsPage