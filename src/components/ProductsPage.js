import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState([...jsonData])
  const [search, setSearch] = useState('')
  
  return(
      <div>
        <h1>IronStore</h1>

      <SearchBar setSearchProp={setSearch}/>
      <ProductTable 
        pTableProp={products} 
        searchProp={search}  
      />
      </div>    
  )
}

export default ProductsPage;