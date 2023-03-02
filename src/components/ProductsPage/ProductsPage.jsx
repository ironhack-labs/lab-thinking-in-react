import { useState } from 'react';
import ProductTable from '../../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json';

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(jsonData)
    const [filter, setFilter] = useState()

    const handleFilterChange = e => {
        const { value } = e.target
        setFilter(value)
        filterProducts(filter)
    }

    const filterProducts = () => {
        if (filter === '') {
            setProducts(productsBackup)
        }
        else {
            const filteredProducts = productsBackup.filter(elm => {
                elm.name.startsWith(filter)
            })
            setProducts(filteredProducts)
        }
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar handleFilterChange={handleFilterChange} />
            <ProductTable productsData={products} />
        </div>
    )
}

export default ProductsPage