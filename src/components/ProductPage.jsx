import { useState } from "react"
import jsonData from './../data.json'
import SearchBar from "./SearchBar/SearchBar"
import ProductTable from "./ProductTable/ProductTable"
import './ProductPage.css'


const ProductPage = () => {

    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(products)

    const [checked, setChecked] = useState(false)

    const filterByStock = () => {

        setChecked(!checked)
        console.log(checked)
        productsInStock()
    }

    function productsInStock() {
        console.log(checked)
        if (!checked) {
            const copy = productsBackup.filter(e => e.inStock)
            setProducts(copy)
            console.log(products)
        } else {
            setProducts(productsBackup)
            console.log(products)

        }
    }


    return (
        <div className="ProductPage">
            <h1>IronStore</h1>
            <SearchBar products={products} setProducts={setProducts} />
            <label>Stock</label>
            <input type="checkbox" onChange={filterByStock} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductPage