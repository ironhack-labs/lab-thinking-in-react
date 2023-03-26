import { useState } from 'react';
import data from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [search, setSearch] = useState('');

  const onSearch = (value) => {
    setSearch(value)
  }
  
  const products = data
    .filter(p => p.name.includes(search))
  
  return(
      <main>
        <h1>IronStore</h1>
        <SearchBar search={search} onSearch={onSearch} />
        <ProductTable products={products} />

      </main>    
  )
}

export default ProductsPage