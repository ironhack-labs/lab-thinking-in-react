// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [productsData] = useState(jsonData) // me hago otra copia de los productos que es la que utilizaré para jugar con los datos, aunque el set lo haré sobre los productos originales (setProducts) por lo que en este caso no me hace un set nuevo

  const showFilteredProducts = (search) => {
    let filteredProduct = productsData.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    });
    setProducts(filteredProduct)
  }

  const showStockProducts = (isChecked) => {
    let productsInStock = "";
    if(isChecked) {
        productsInStock = productsData.filter(product =>{
        return product.inStock
      }) 
    }else {
      return productsData;
    }
    setProducts(productsInStock);
  }


  return(
      <div>
        <h1>IronStore</h1>
        <div className='main-container'>
            <div className='search-bar'>
                <SearchBar showFilteredProducts={showFilteredProducts} showStockProducts={showStockProducts} />
            </div>
            <div className='products-table'>
                <ProductTable products={products}/>
            </div>
        </div>
      </div>    
  )
}
export default ProductsPage;