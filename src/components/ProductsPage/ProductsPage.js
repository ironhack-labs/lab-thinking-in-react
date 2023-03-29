import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import jsonData from './../../data.json'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <ProductTable  products={products}/>
    </div>
  )
}

export default ProductsPage