import productData from "../data.json"
import { useState } from "react"
import ProductTable from "./ProductTable"
import SortButton from "./SortButton"

function ProductPage() {
    const [products,setProducts] = useState(productData)
  return (
    <div>
      <h1>IronStore</h1>
      <SortButton products={products} setProducts={setProducts}/>
      <ProductTable products ={products} setProducts={setProducts}/>
      
    </div>
  )
}

export default ProductPage
