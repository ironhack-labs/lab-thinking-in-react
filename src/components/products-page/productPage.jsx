import { useState } from 'react';
import ProductTable from '../product-table/ProductTable';
import SearchBar from '../search-bar/SearchBar';
import jsonData from './../../data.json';



function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [productsBackuo, setProductsBackup] = useState(jsonData)

    function handleChange() {
        Products.filter(elm => {
            elm.name
        })
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage