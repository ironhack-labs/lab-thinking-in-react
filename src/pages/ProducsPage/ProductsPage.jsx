import SearchBar from "../../components/SearchBar/SearchBar"
import ProductTable from "../../components/ProductTable/ProductTable"
import { useState } from "react"
import json from './../../data.json'


const ProductsPage = () => {

    const [products, setProducts] = useState(json)
    const [productsBackup, setProductsBackup] = useState(products)



    const filterProducts = firstLetter => {
        if (firstLetter === '') {
            setProducts(productsBackup)
        } else {
            console.log("---------->", firstLetter)
            const filteredProducts = productsBackup.filter(elm => elm.name.toLowerCase().startsWith(firstLetter.toLowerCase()))
            console.log("---------------!!!!!!!", filteredProducts)

            // setProducts(filteredProducts)
        }
    }

    return (
        <div className="products-page">
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts} products={products} />
            <ProductTable products={products} />

        </div>
    )
}

export default ProductsPage