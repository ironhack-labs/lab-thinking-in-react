import { useState } from 'react';
import jsonData from './../../data.json';
import ProductTable from './../ProductTable/ProductTable'
import SearchBar from './../SearchBar/SearchBar'

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData)
    const [productBackUp, setProductBackup] = useState(jsonData)

    const filterProduct = input => {
        const productos = productBackUp.filter(elm => elm.name.toLowerCase().startsWith(input))
        setProducts(productos)
    }

    return (
        <div>
            <SearchBar filterProduct={filterProduct} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage
