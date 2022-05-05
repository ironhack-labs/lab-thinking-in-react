
import { useState } from 'react';
import jsonData from './../../data.json'
import SearchBar from '../SearchBar/searchBar'
import ProductTable from '../ProductTable/productTable'

function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    const filterBySearch = (searchInput) => {
        let productsCopy = [...jsonData]
        let filtered = productsCopy.filter(elem => elem.name.includes(searchInput))
        console.log(filtered)
        setProducts(filtered)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterBySearch={filterBySearch} />
            <ProductTable productData={products} />
        </div>
    )
}

export default ProductsPage