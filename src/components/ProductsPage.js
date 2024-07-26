
import { useState } from 'react'
import jsonData from './../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

  const [products, setProducts] = useState(jsonData)

  const allProducts = [...jsonData]

  function sortByName() {

    let sortedItems = [...products].sort((a,b) => a.name.localeCompare(b.name))

    setProducts(sortedItems)
  }

  function sortByPrice() {

    let sortedPrices = [...products].sort((a,b) => parseFloat(b.price.slice(1) - a.price.slice(1)))

    setProducts(sortedPrices)

  }


  return (
    <div className='products-page'>
      <h1>Ironstore</h1>
      <SearchBar allProducts={allProducts} products={products} setProducts={setProducts} sortByName={sortByName} sortByPrice={sortByPrice}/>
      <ProductTable products={products} />
    </div>
  )
}

export default ProductsPage
