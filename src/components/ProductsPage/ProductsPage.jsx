import { useState } from "react"
import ProductTable from "../ProductTable/ProductTable"
import SearchBar from "../SearchBar/SearchBar"
import productsData from "./../../data.json"


const ProductsPage = () => {

    const [products, setProducts] = useState(productsData)
    const [productsBackup, setProductsBackup] = useState(productsData)

    const filterProducts = eachLetter => {
        const filteredProducts = productsBackup.filter(elm => elm.name.startsWith(eachLetter))
        setProducts(filteredProducts)
    }

    const filterStock = () => {
        const filteredProducts = productsBackup.filter(elm => elm.inStock === true)
        setProducts(filteredProducts)
    }

    return (
        <>
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts} filterStock={filterStock} />
            <ProductTable products={products} />

        </>
    )
}

export default ProductsPage