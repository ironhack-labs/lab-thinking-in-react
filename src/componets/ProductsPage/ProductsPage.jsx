import ProductTable from "../ProductTable/ProductTable"
import SearchBar from "../SearchBar/SearchBar"
import { useState } from 'react';
import jsonData from './../../data.json';

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(jsonData)

    const filterProductsByName = query => {
        const filteredProducts = productsBackup.filter(product => product.name.includes(query))
        setProducts(filteredProducts)
    }
    const filterProductsByStock = hasStock => {
        const filteredProducts = productsBackup.filter(product => product.inStock !== hasStock)
        setProducts(filteredProducts)
    }


    return (
        <div className="productPage">
            <h1>IronStore</h1>
            <SearchBar filterProductsByName={filterProductsByName} filterProductsByStock={filterProductsByStock} />
            <ProductTable products={products} />
        </div>
    )
}
export default ProductsPage