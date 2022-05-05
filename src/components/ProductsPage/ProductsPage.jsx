import { useState } from 'react';
import ProductsTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json';



function ProductsPage() {

    const [productsBackup, setProductsBackup] = useState(jsonData);
    const [products, setProducts] = useState(jsonData);

    const filterProducts = (searchInput, onlyInStock = true) => {

        let filteredProducts

        if (searchInput === "") {
            filteredProducts = productsBackup.filter(elm =>(elm.inStock || !onlyInStock))
        } else {
            filteredProducts = productsBackup.filter(elm => (elm.name.toLowerCase().includes(searchInput.toLowerCase()) && (elm.inStock || !onlyInStock)) )
        }

        setProducts(filteredProducts)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts}/>
            <ProductsTable products={products} />

        </div>
    )
}

export default ProductsPage