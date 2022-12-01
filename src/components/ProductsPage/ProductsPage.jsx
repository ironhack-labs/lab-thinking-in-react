import { useState, useEffect } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductsTable from '../ProductTable/ProductsTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [query, setQuery] = useState("")

    useEffect(() => {
        query ? products.filter((product) => setFilteredProducts(product.name.startsWith(query)))
            : setFilteredProducts(products)
    }, [query])



    return (
        <>
            <SearchBar setQuery={setQuery} />
            <ProductsTable products={filteredProducts} />
        </>
    )
}

export default ProductsPage