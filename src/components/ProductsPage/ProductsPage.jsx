import { useState } from 'react';
import jsonData from '../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [productsBackup, setProductsBackup] = useState(jsonData)

    const filterProducts = searchProduct => {
        const filteredProducts = productsBackup.filter(e => e.name.toLowerCase().includes(searchProduct))
        setProducts(filteredProducts)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <div>
                <SearchBar filterProducts={filterProducts}></SearchBar>
            </div>
            <div>
                <ProductTable products={products}></ProductTable>
            </div>
        </div >
    )
}


export default ProductsPage