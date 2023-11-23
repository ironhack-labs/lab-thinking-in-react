import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)
  const [productsCopy, setProductsCopy] = useState(jsonData) 

  const filterProducts = (filterParams, searchInStock) => {
    if (searchInStock) {
      const filteredProducts = productsCopy.filter(elm => {
        if (elm.name.toLowerCase().startsWith(filterParams.toLowerCase()) && elm.inStock) {
          return elm
        }
      })
      setProducts(filteredProducts)
    }
    else {
      const filteredProducts = productsCopy.filter(elm => elm.name.toLowerCase().startsWith(filterParams.toLowerCase()))
      setProducts(filteredProducts)
    }
  }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts={filterProducts}/>
        <ProductTable dataProducts={ products }/>
      </div>    
  )
}

export default ProductsPage