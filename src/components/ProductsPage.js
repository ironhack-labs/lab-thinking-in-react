import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
    const [query, setQuery] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    return (

        <div className='container'>
            <h1>IronStore</h1>
            <SearchBar setQuery={setQuery} setCheckbox={setCheckbox} />
            <table className='table'>
                <thead>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td><strong>Price</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <ProductTable products={products} query={query} checkbox={checkbox} />
                </tbody>
            </table>
        </div>

    )
}

export default ProductsPage;
