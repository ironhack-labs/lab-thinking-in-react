import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    const [productBackup, setProductBackup] = useState(jsonData)

    const filterProducts = query => {

        const filterProduct = productBackup.filter(elm => elm.name.includes(query))
        setProducts(filterProduct)

    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage