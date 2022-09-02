import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'
import './ProductPage.css'
import { useState } from 'react';
import jsonData from './../../data.json';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

console.log(setProducts)

  return (
    <div>
      <h1 className='text-center'>IronStore</h1>
      <SearchBar></SearchBar>
      <ProductTable products={products}></ProductTable>
    </div>
  )
}


export default ProductPage