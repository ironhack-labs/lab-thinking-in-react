import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import jsonData from './../../data.json';

function ProductsPage() {

    const [products, setProducts] = useState(jsonData)
    const [productsBackUp, setProductsBackUp] = useState(jsonData)

    function filterProductsByName(query) {
        const filteredProducts = productsBackUp.filter(product => product.name.includes(query))
        setProducts(filteredProducts)
    }
    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProductsByName={filterProductsByName}></SearchBar>
            <ProductTable productsJson={products}></ProductTable>
        </div>
    )
}
export default ProductsPage