import productData from '../data.json'
import { useState } from 'react'
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'

function ProductsPage(){
    const [products, setProducts] = useState(productData)
    const [checked, setChecked] = useState(false)

    function checkboxChange(){
        if(checked === false){
            setChecked(true)
            const filteredProducts = products.filter((oneProduct)=>{
                return oneProduct.inStock === true
            })
            setProducts(filteredProducts) 
        }
        if(checked === true){
            setChecked(false)
            const allProducts = [...productData]
            setProducts(allProducts)
        }
    }
    return(
        <div id="products-page-container">
        <h1>IronStore</h1>
        <label htmlFor="inStock">Filter out of stock items</label>
        <input name= "inStock" type="checkbox" onChange={checkboxChange} />
        <SearchBar products = {products} setProducts = {setProducts}></SearchBar>
        <ProductsTable productInfo = {products}></ProductsTable>
        </div>
    )
}

export default ProductsPage