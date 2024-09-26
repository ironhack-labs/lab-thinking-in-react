import { useState } from "react"
import productsData from "../data.json"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

function ProductsPage() {

  const [products, setProducts] = useState(productsData)

  const [searchNombre, setSearchNombre] = useState("")

  const [isInStock, setIsInStock] = useState(false)

  return (

    <>
    
    <h1 className="text-3xl font-bold underline">IronStore</h1>

    <SearchBar searchNombre={searchNombre} setSearchNombre={setSearchNombre} isInStock={isInStock} setIsInStock={setIsInStock}/>

    <ProductTable products={products} searchNombre={searchNombre} isInStock={isInStock}/>
    
    </>
  )
}

export default ProductsPage