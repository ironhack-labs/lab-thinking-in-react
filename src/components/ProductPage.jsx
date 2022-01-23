import React from 'react'
import jsonData from '../data.json'
import Searchbar from './SearchBar'
import ProductTable from './ProductTable'

const ProductPage = () =>{

const [products, useProducts] = React.useState(jsonData)


return(
    <div className="ProductPage">
        <h1>IronStore</h1>
        <Searchbar />
        <ProductTable itemList={products} />
    </div>
    )
}

export default ProductPage