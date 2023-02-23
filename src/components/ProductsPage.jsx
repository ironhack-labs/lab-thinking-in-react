import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  const [check, setCheck] = useState(false);
  const productsInStock = products.filter(product => {
    return product.inStock
  })
  let productCopy;
  
  if(check){
    productCopy = productsInStock;
  } else if(!check){
    productCopy = [...products]
  }
  
  const filteredProducts = productCopy.filter(product => {
    return product.name.toLowerCase().includes(query.toLowerCase())
  })

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar query={query} setQuery={setQuery} check={check} setCheck={setCheck}></SearchBar>
       <ProductTable products={filteredProducts} check={check}></ProductTable>
      </div>    
  )
}
export default ProductsPage