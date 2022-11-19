
import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)
  const [productsFiltered, setProductsFiltered] = useState(products)

function searchProduct(p) {
  const filteredProduct = products.filter((product) => {
    return product.name.toLowerCase().includes(p.toLowerCase())
  })
  setProductsFiltered(filteredProduct)
}
  
  return(
      <div>
        <SearchBar searchProducts={searchProduct} />
        <ProductTable products={productsFiltered}/>
      </div>    
  )
}

export default ProductsPage