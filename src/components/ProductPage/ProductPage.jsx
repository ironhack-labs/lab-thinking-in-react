import { useState } from 'react';
import jsonData from '../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    const [productsBackUp, setProductsBackUp] = useState(jsonData)


    function filterProducts(value) {
        if (value === "") {
            setProducts(productsBackUp)
        } else {
            const filteredProducts = products.filter(elm => elm.name.startsWith(value))
            setProducts(filteredProducts)
        }

    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts} />

            <ProductTable products={products} />

        </div>
    )
}

export default ProductsPage