import ProductTable from "../ProductTable/ProductTable"
import SearchBar from "../SearchBar/SearchBar"

import { useEffect, useState } from "react"

import jsonData from './../../data.json'


const ProductPage = ({ }) => {

    const [products, setProducts] = useState(jsonData)

    const [productsCopy, setProductCopy] = useState(jsonData)


    const filterProduct = productName => {
        console.log("productName", productName)

        if (productName === '') {
            setProducts(productsCopy)
        }
        else {
            console.log("productName", productName)

            const filteredProduct = productsCopy.filter(elm => elm.name.toUpperCase().startsWith(productName.toUpperCase()))
            console.log("estos son los productos filtrados", filteredProduct)
            setProducts(filteredProduct)
        }
    }



    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar filterProduct={filterProduct} />
            <ProductTable products={products} />



        </div>
    )
}

export default ProductPage


