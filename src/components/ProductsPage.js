import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(jsonData);

    const onSearch = (value) => {
        setSearch(value)
        if (value)
            setProducts(prev => prev.filter(product => product.name.toLowerCase().includes(value.toLowerCase())))
        else setProducts(jsonData)
    }

    const onCheck = (value) => {
        if (value)
            setProducts(prev => prev.filter(product => product.inStock === value))
        else setProducts(jsonData)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar onSearch={onSearch} onCheck={onCheck} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage