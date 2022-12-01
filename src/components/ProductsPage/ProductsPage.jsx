import './ProductsPage.css'
import { useState } from 'react'
import jsonData from './../../data.json'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable';
import ProductRow from '../ProcuctRow/ProductRow';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div className='ProductsPage'>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable />

        </div>
    )
}

export default ProductsPage