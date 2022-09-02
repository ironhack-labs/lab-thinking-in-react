import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'
import './ProductPage.css'
import { useState } from 'react';
import jsonData from './../../data.json';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1 className='text-center'>IronStore</h1>
      <SearchBar products={products} setProducts={setProducts} jsonData={jsonData}></SearchBar>
      <ProductTable products={products}></ProductTable>
    </div>
  )
}


export default ProductPage