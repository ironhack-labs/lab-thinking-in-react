import React, { useState } from 'react'
import jsonData from '../../data.json'
import ProductTable from '../ProductTable'
import SearchBar from '../SearchBar'
import './styles.css'

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData)
  const [productsBackup, setProductsBackup] = useState(jsonData)

  const searchFn = (input) => {
    const match = productsBackup.filter(({name}) => {
        return name.toLowerCase().includes(input.toLowerCase())
    })

    setProducts(match)
  }

  return (
    <div className='page'>
        <h1>Iron Store</h1>
        <SearchBar searchFn={searchFn}/>
        <ProductTable products={products}/>    
    </div>
  )
}

export default ProductsPage