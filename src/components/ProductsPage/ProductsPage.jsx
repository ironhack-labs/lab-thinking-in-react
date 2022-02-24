import productsFromApi from "./../../data.json"
import { useState } from "react"
import ProductTable from "./../ProductTable/ProductTable"
import SearchBar from "./../SearchBar/SearchBar"

const ProductsPage = () => {

    //para pasar datos de padre a hijo, usamos el usestate porque va a recibir datos del json y almacenarlos en productos que es una variable, no un array y guardar datos del json
    const [products, setProducts] = useState(productsFromApi)
    const [productsData, setProductsData] = useState(productsFromApi)

    const showFilteredProducts = str => {
        let filteredProducts

        if (str === "") {
            filteredProducts = productsData
        } else {
            filteredProducts = productsData.filter((elm) => elm.name[0].toLowerCase() === str.toLowerCase())
        }
        setProductsData(filteredProducts)
    }


    return (
        <div>
            <h1>Ironstore</h1>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )

}

export default ProductsPage