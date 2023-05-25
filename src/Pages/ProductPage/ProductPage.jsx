import { Link } from "react-router-dom";
import jsonData from './../../data.json'
import { useState } from "react";
import ProductTable from "../../Components/ProductTable/ProductTable";
import SearchBar from "../../Components/SearchBar/SearchBar";

const ProductPage = () => {

    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(jsonData)
    const filterProducts = query => {

        const filteredProduct = productsBackup.filter(elm => elm.name.includes(query))
        setProducts(filteredProduct)
    }

    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar filterProducts={filterProducts} />
            <ProductTable products={products} />




        </div>
    )
}




export default ProductPage