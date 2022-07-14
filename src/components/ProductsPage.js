import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';


function ProductPage () {
    const [products, setProducts] = useState(jsonData);
    const [query, setQuery] = useState('')
    const [inStock, setInStock] = useState(false)

    const filteredProducts = products.filter(product => {
      // if(inStock && !product.inStock) {
      //   return false
      // }

      if(product.name.toLowerCase().includes(query.toLowerCase()) && (inStock && product.inStock === inStock || !inStock)) {
          return true
      } else {
          return false
      }
    })



    return(
        <div>
          <h1>IronStore</h1>
          <SearchBar products = {products} setQuery = {setQuery} query={query} inStock={inStock} setInStock={setInStock}/>
          <ProductTable products = {filteredProducts} />
        </div>    
    )
  }


  export default ProductPage