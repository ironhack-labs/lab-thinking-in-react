import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'
import './ProductPage.css'
import { useState } from 'react';
import jsonData from './../../data.json';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1 className='text-center mt-5'>IronStore</h1>
      <div className='mb-5 row d-flex justify-content-center'>
        <SearchBar products={products} setProducts={setProducts} jsonData={jsonData}></SearchBar>
      </div>
      <ProductTable products={products}></ProductTable>
    </div>
  )
}


export default ProductPage