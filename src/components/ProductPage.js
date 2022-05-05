
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {

  const [products, setProducts] = useState(jsonData);

  const [search, setSearch] = useState('')

  const [check, setChecked] = useState(false)

  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearch={setSearch} setChecked={setChecked}/>
        <ProductTable products={products} search={search} check={check}/>
      </div>    
  )
}

export default ProductsPage