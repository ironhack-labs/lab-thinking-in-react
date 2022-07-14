import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"
import jsonData from './../../data.json'
import { useState } from 'react'



const ProductsPage = () => {

    const [allProducts, setAllProducts] = useState(jsonData)

    const filterProducts = letter => {

        if (letter !== '') {
            setAllProducts(allProducts)
        } else {
            const filterProducts = allProducts.filter(elm => elm.name.startsWith(letter))
            setAllProducts(filterProducts)
        }
    }

    return (
        <>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable products={allProducts} />
        </>
    )
}

export default ProductsPage