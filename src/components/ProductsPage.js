import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('')
  const [isStocked, setIsStocked]= useState(true)
  
  const handleSearchInput = e => {
    setSearch(e.target.value)
  }

  const handleStockChange = e => {
    setIsStocked(e.target.checked)
  }
  
  let filteredProducts = products.filter((product)=>{
    if(isStocked && product.inStock===false) return false
    else return product.name.toLowerCase().includes(search.toLowerCase()) 
  })

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar search={search} handleSearchInput={handleSearchInput}/>
        <label>Show only stocked items</label>
        <input type="checkbox" checked={isStocked} onChange={handleStockChange}/>
        <div>
            <ProductTable products={filteredProducts}/>
        </div>
      </div>    
  )
}
export default ProductsPage