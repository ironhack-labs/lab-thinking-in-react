import { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const ProductsPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [products ] = useState(jsonData)
  const [searchTerm, setSearchTerm] = useState("")
  const [onlyInStock, setOnlyInStock] = useState(false)

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleProductsInStock = (event) => { 
    setOnlyInStock(event.target.checked)
  }
  
  return (
    <div className='ProductsPage'>
      <h1>IronStore</h1>
      <SearchBar searchByWord={handleSearchTermChange} showOnlyInStock={handleProductsInStock}/>
      <ProductTable products={products} searchTerm={searchTerm} showOnStock={onlyInStock} />
    </div>
  )
}

export default ProductsPage