import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('')
  const [inStock, setInStock] = useState(false)

  return(
      <div className='productsPage'>
        <h1>IronStore</h1>
        <SearchBar setSearch={setSearch} inStock={inStock} setInStock={setInStock} />
        <ProductsTable products={products} setProducts={setProducts} search={search} inStock={inStock} />
      </div>    
  )
}

export default ProductsPage