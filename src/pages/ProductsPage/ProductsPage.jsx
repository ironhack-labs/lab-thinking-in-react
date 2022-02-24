import { useEffect, useState } from "react"
import ProductTable from "../../components/ProductTable/ProductTable"
import SearchBar from "../../components/SearchBar/SearchBar"
import jsonData from './../../data.json'
import axios from 'axios'

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData)
    const [productsData, setProductsData] = useState(jsonData)

    let filteredProducts
    const showFilteredProducts = str => {
        let input = str.toLowerCase()

        if (input === '') {
            filteredProducts = [...productsData]
            setProducts(filteredProducts)
        }
        else {
            filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(input))
            setProducts(filteredProducts)
        }
    }

    const showStockProducts = bool => {
        let stockProducts
        if (!bool) {
            stockProducts = [...productsData]
            setProducts(stockProducts)
        }
        else {
            stockProducts = productsData.filter(product => product.inStock === true)
            setProducts(stockProducts)
        }
    }


    return (
        <>
            <h1>IronStore</h1>

            <SearchBar showFilteredProducts={showFilteredProducts} showStockProducts={showStockProducts} />
            <ProductTable allData={products} />
        </>
    )
}

export default ProductsPage