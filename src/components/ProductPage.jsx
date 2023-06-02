// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchState, setSearch] = useState ({query: '', listOfProducts:[] })

  
  // Para manejar el estado del input
  const handleChange = (event) => {
    const searchResults = products.filter(product =>{
      if (event.target.value === "") {
        return products
      } else {
        return product.name.toLowerCase().includes(event.target.value.toLowerCase())
      }
    })
    console.log('SEARCH RESULTS', searchResults)
    setSearch({query: event.target.value, listOfProducts: searchResults })
  }



  return(
      <div>
        <h1>IronStore</h1>
        <div className='main-container'>
            <div className='search-bar'>
                <SearchBar handleChange={handleChange} searchQuery={searchState.query}/>
            </div>
            <div className='products-table'>
                <ProductTable searchListResults={searchState.listOfProducts}/>
            </div>
        </div>
      </div>    
  )
}
export default ProductsPage;