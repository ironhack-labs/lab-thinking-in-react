import ProductsData from '../data.json'
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductPage() {
    const [products] = useState(ProductsData)

    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleSearch = (filteredProducts) => {
        setFilteredProducts(filteredProducts)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} onSearch={handleSearch}></SearchBar>
            <ProductTable products={filteredProducts.length > 0 ? filteredProducts : products} >

            </ProductTable>
        </div>
    )
}

export default ProductPage