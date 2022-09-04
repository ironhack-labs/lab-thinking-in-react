

import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';
import { useState } from 'react'

function ProductsPage() {

  const [ search, setSearch ] = useState("")
  const [ checkInStock, setCheckInStock ] = useState(false)

  return (
    <>
      <h1 className="my-3">IronStore</h1>
      <SearchBar className="mb-3" search={search} setSearch={setSearch} checkInStock={checkInStock} setCheckInStock={setCheckInStock}/>
      <ProductTable search={search} checkInStock={checkInStock}/>
    </>
  );
}

export default ProductsPage;
