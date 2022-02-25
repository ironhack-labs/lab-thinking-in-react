import { React, useState } from 'react'
import productsData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


export default function ProductsPage() {

// States
const [search, setSearch] = useState("")
const [isChecked, setCheckbox] = useState(false)

// Handlers
  const searchHandler = function (searchInput) {
    console.log(searchInput.target.value)
  setSearch(searchInput.target.value)
  }
  const checkboxHandler = function (checkInput) {
    console.log(isChecked)
    setCheckbox(checkInput.target.checked)
  }
// OnChange
  let filteredProducts = productsData.filter((product) => {
    if(product.name.toLowerCase().includes(search) || product.price.toLowerCase().includes(search)){
      return product
    }
    })
// if state of checkbox is true (===checked) return only products inStock
    if(isChecked === true){ 
        filteredProducts = productsData.filter((product) => {
        return product.inStock === true;})
    }

const [products, setProducts] = useState(productsData)
console.log(products)
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar products={products} search={search} searchHandler={searchHandler} checkboxHandler={checkboxHandler}/>
        <ProductTable products={filteredProducts}/>
    </div>
  )
}
