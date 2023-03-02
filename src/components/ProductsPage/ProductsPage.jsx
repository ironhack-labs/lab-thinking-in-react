import { useState } from 'react'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'
import jsonData from './../../data.json'

function ProductsPage() {

    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(jsonData)

    const filterProducts = nameProduct => {
        if (nameProduct === '') {
            setProducts(productsBackup)
        } else {
            const filteredProducts = productsBackup.filter(elm => {


                const prodName = elm.name.toLowerCase()

                return prodName.includes(nameProduct.toLowerCase())
            })
            setProducts(filteredProducts)
        }
    }

    return (

        <div>

            <SearchBar filterProducts={filterProducts} />
            <ProductTable products={products} />

        </div>
    )
}

export default ProductsPage