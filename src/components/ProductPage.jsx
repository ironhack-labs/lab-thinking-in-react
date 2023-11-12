import { useState } from 'react';
import jsonData from "./../data.json"
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductPage() {
    const [products, setProducts] = useState(jsonData)
    const [filteredProducts, setFilteredProducts] = useState(jsonData)

    return (
        <div>
            <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Awesome</button>
            <h1 className="text-3xl font-bold underline">Product Page</h1>
            <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
            <ProductTable products={filteredProducts} />
        </div >
    )
}

export default ProductPage;