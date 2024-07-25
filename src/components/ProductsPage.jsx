
import { useState } from 'react'
import ProductTable from './ProductTable'
import SortButton from './SortButton'
import jsonData from '../data.json'



function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    function sortbyName(){
        const prodsCopied = [...products]
        prodsCopied.sort((a, b)=>{
            return a.name.localeCompare(b.name)
        })
        setProducts(prodsCopied)
    }

    function sortbyPrice(){
      const prodsCopied = [...products]
      prodsCopied.sort((a, b)=>{
          return a.price.slice(1)-b.price.slice(1)
      })
      setProducts(prodsCopied)
  }

  return (
    <div>
        <h1>IronStore</h1>
        <SortButton sortbyName={sortbyName} sortbyPrice={sortbyPrice}/>
        <ProductTable products={products}/>
    </div>

  )
}

export default ProductsPage