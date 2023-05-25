import { useState } from 'react'
import jsonData from './../../data.json'
import SearchBar from './../SearchBar/SearchBar'
import ProductTable from './../ProductTable/ProductTable'

function ProductsPage () {

    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(jsonData)

    const filterProducts = query => {
        console.log(query)
        const filteredProduct = productsBackup.filter(elm => elm.name.includes(query))
        setProducts(filteredProduct)
    }

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts} />
            <ProductTable products={products} />
        </div>    
    )
}

export default ProductsPage