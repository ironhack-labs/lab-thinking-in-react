import { useState } from 'react';
import jsonData from './../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
  

    function handleSearch(e) {

      const productsCopy = [...jsonData]

      const filterBySearch = productsCopy.filter((product) => {
          if (product.name.toLowerCase().includes(e)) { return product; }

      })
  
      setProducts(filterBySearch)
  
  }

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={handleSearch}/>
        <ProductTable products={products} />
      </div>    
  )
}

export default ProductsPage